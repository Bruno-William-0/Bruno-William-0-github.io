import express from 'express'
import dotenv from 'dotenv'
import dataBase from './database/ormconfig'
import cors from 'cors'
import routes from './routes'

dotenv.config()
const app = express()
const port = process.env.PORT || 3001

app.use(express.json()) // habilita o express para receber dados no formato json
app.use(routes) // habilita as rotas
app.use(cors({
    origin: '*', // Permitir todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permitir todos os métodos
    allowedHeaders: ['Content-Type', 'Authorization'], // Permitir todos os cabeçalhos necessários
}));
app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
  console.log(`Banco de dados`, dataBase.isInitialized ? 'inicializado' : 'não inicializado')
})