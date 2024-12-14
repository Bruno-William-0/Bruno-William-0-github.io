import { Request, Response } from 'express';
import User from '../models/user.entity';
import Token from '../models/token.entity';
import bcrypt from 'bcrypt';

export default class AuthController {
  static async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name) {
      res.status(400).json({ error: 'O nome é obrigatório' });
      return;
    }

    if (!email) {
      res.status(400).json({ error: 'O email é obrigatório' });
      return;
    }

    if (!password) {
      res.status(400).json({ error: 'A senha é obrigatória' });
      return;
    }

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = bcrypt.hashSync(password, 10);
    await user.save();

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email) {
      res.status(400).json({ error: 'O email é obrigatório' });
      return;
    }

    if (!password) {
      res.status(400).json({ error: 'A senha é obrigatória' });
      return;
    }

    const user = await User.findOneBy({ email });
    if (!user) {
      res.status(401).json({ error: 'Usuário não encontrado' });
      return;
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ error: 'Senha inválida' });
      return;
    }

    await Token.delete({ user: { id: user.id } });

    const token = new Token();
    token.token = bcrypt.hashSync(Math.random().toString(36), 1).slice(-20);
    token.expiresAt = new Date(Date.now() + 60 * 60 * 1000);
    token.refreshToken = bcrypt.hashSync(Math.random().toString(36), 1).slice(-20);
    token.user = user;
    await token.save();

    res.json({
      token: token.token,
      expiresAt: token.expiresAt,
      refreshToken: token.refreshToken,
    });
  }

  static async refresh(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(400).json({ error: 'O refresh token é obrigatório' });
      return;
    }

    const token = await Token.findOneBy({ refreshToken: authorization });
    if (!token) {
      res.status(401).json({ error: 'Refresh token inválido' });
      return;
    }

    if (token.expiresAt < new Date()) {
      await token.remove();
      res.status(401).json({ error: 'Refresh token expirado' });
      return;
    }

    token.token = bcrypt.hashSync(Math.random().toString(36), 1).slice(-20);
    token.refreshToken = bcrypt.hashSync(Math.random().toString(36), 1).slice(-20);
    token.expiresAt = new Date(Date.now() + 60 * 60 * 1000);
    await token.save();

    res.json({
      token: token.token,
      expiresAt: token.expiresAt,
      refreshToken: token.refreshToken,
    });
  }

  static async logout(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(400).json({ error: 'O token é obrigatório' });
      return;
    }

    const userToken = await Token.findOneBy({ token: authorization });
    if (!userToken) {
      res.status(401).json({ error: 'Token inválido' });
      return;
    }

    await userToken.remove();
    res.status(204).json();
  }
}
