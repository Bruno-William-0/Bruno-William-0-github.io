// function cadastrarFuncionario() {
//   const funcionario = {
//     name: document.getElementsByName('nomef')[0].value,
//     birth: document.getElementsByName('dataf')[0].value,
//     phone: document.getElementsByName('telf')[0].value,
//     email: document.getElementsByName('emailf')[0].value,
//     employerfunction: document.getElementsByName('funcaof')[0].value
//   };

//   const paragrafo = document.createElement('p');
//   paragrafo.innerText = JSON.stringify(funcionario);

//   document.body.appendChild(paragrafo);

//   fetch('https://api-pets.onrender.com/employer', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(funcionario)
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Funcionário cadastrado com sucesso:', data);
//     })
//     .catch(error => {
//       console.error('Erro ao cadastrar funcionário:', error);
//     });
// }

// function listareexcluir() {
//   fetch('https://api-pets.onrender.com/employer')
//     .then(response => response.json())
//     .then(funcionarios => {
//       const tabela = document.createElement('table');
//       tabela.classList.add('table');

//       const cabecalho = tabela.createTHead();
//       const linhaCabecalho = cabecalho.insertRow();

//       // Cria as células do cabeçalho
//       const colunaId = linhaCabecalho.insertCell();
//       colunaId.innerText = 'ID';

//       const colunaNome = linhaCabecalho.insertCell();
//       colunaNome.innerText = 'Nome';

//       const colunaNascimento = linhaCabecalho.insertCell();
//       colunaNascimento.innerText = 'Nascimento';

//       const colunaTelefone = linhaCabecalho.insertCell();
//       colunaTelefone.innerText = 'Telefone';

//       const colunaEmail = linhaCabecalho.insertCell();
//       colunaEmail.innerText = 'E-mail';

//       const colunaFuncao = linhaCabecalho.insertCell();
//       colunaFuncao.innerText = 'Função';

//       const colunaAcoes = linhaCabecalho.insertCell();
//       colunaAcoes.innerText = 'Ações';

//       const corpoTabela = tabela.createTBody();

//       // Preenche a tabela com os funcionários
//       funcionarios.forEach(funcionario => {
//         const linha = corpoTabela.insertRow();

//         // Insere os dados do funcionário nas células da linha
//         const colunaId = linha.insertCell();
//         colunaId.innerText = funcionario.id;

//         const colunaNome = linha.insertCell();
//         colunaNome.innerText = funcionario.nome;

//         const colunaNascimento = linha.insertCell();
//         colunaNascimento.innerText = funcionario.nascimento;

//         const colunaTelefone = linha.insertCell();
//         colunaTelefone.innerText = funcionario.telefone;

//         const colunaEmail = linha.insertCell();
//         colunaEmail.innerText = funcionario.email;

//         const colunaFuncao = linha.insertCell();
//         colunaFuncao.innerText = funcionario.funcao;

//         const colunaAcoes = linha.insertCell();

//         // Cria o botão de exclusão
//         const botaoExcluir = document.createElement('button');
//         botaoExcluir.classList.add('delete-button');
//         botaoExcluir.addEventListener('click', () => {
//           fetch(`https://api-pets.onrender.com/employer/${funcionario.id}`, {
//             method: 'DELETE'
//           })
//             .then(response => response.json())
//             .then(data => {
//               console.log('Funcionário excluído com sucesso:', data);
//               // Atualiza a tabela após a exclusão
//               tabela.remove();
//               listareexcluir(); // Chama a função novamente para atualizar a tabela
//             })
//             .catch(error => {
//               console.error('Erro ao excluir funcionário:', error);
//             });
//         });

//         colunaAcoes.appendChild(botaoExcluir);
//         // Criando a div
// var div = document.createElement("div");

// // Criando os labels
// var labels = ["Label 1", "Label 2", "Label 3", "Data", "Selecionar"];
// for (var i = 0; i < labels.length; i++) {
//   var label = document.createElement("label");
//   label.textContent = labels[i];
//   div.appendChild(label);

//   // Criando os inputs
//   var nome = document.createElement("input");
//   var data = document.createElement("input");
//   var telefone = document.createElement("input");
//   var email = document.createElement("input");
//   data.type("date");
//   email.type("email");
//     var select = document.createElement("select");
//     var option1 = document.createElement("option");
//     option1.text = "Banho";
//     var option2 = document.createElement("option");
//     option2.text = "Tosa";
//     select.add(option1);
//     select.add(option2);
//     div.appendChild(select);
//   }
//   div.appendChild(nome, data, telefone, email);
//   div.style("display: none;  z-index: 9999; position: fixed;")


// // Criando o botão de atualização
// const button = document.createElement("button");
// button.textContent = "Atualizar";
// button.onclick = div.style("display: block")
// div.appendChild(button);

// // Adicionando a div ao body
// document.body.appendChild(div);

//       });

//       document.body.appendChild(tabela);
//       const cookies = document.cookie.split(';');
// let loginData = null;



// console.log(loginData);



//     })
//     .catch(error => {
//       console.error('Erro ao obter a lista de funcionários:', error);
//     });
// }

function cadastrarFuncionario() {
  const funcionario = {
    name: document.getElementsByName('nomef')[0].value,
    birth: document.getElementsByName('dataf')[0].value,
    phone: document.getElementsByName('telf')[0].value,
    email: document.getElementsByName('emailf')[0].value,
    employerfunction: document.getElementsByName('funcaof')[0].value
  };

  const paragrafo = document.createElement('p');
  paragrafo.innerText = JSON.stringify(funcionario);

  document.body.appendChild(paragrafo);

  fetch('https://api-pets.onrender.com/employer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(funcionario)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Funcionário cadastrado com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao cadastrar funcionário:', error);
    });
}

function listareexcluir() {
  fetch('https://api-pets.onrender.com/employer')
    .then(response => response.json())
    .then(funcionarios => {
      const tabela = document.createElement('table');
      tabela.classList.add('table');

      const cabecalho = tabela.createTHead();
      const linhaCabecalho = cabecalho.insertRow();

      // Cria as células do cabeçalho
      const colunaId = linhaCabecalho.insertCell();
      colunaId.innerText = 'ID';

      const colunaNome = linhaCabecalho.insertCell();
      colunaNome.innerText = 'Nome';

      const colunaNascimento = linhaCabecalho.insertCell();
      colunaNascimento.innerText = 'Nascimento';

      const colunaTelefone = linhaCabecalho.insertCell();
      colunaTelefone.innerText = 'Telefone';

      const colunaEmail = linhaCabecalho.insertCell();
      colunaEmail.innerText = 'E-mail';

      const colunaFuncao = linhaCabecalho.insertCell();
      colunaFuncao.innerText = 'Função';

      const colunaAcoes = linhaCabecalho.insertCell();
      colunaAcoes.innerText = 'Ações';

      const corpoTabela = tabela.createTBody();

      // Preenche a tabela com os funcionários
      funcionarios.forEach(funcionario => {
        const linha = corpoTabela.insertRow();

        // Insere os dados do funcionário nas células da linha
        const colunaId = linha.insertCell();
        colunaId.innerText = funcionario.id;

        const colunaNome = linha.insertCell();
        colunaNome.innerText = funcionario.nome;

        const colunaNascimento = linha.insertCell();
        colunaNascimento.innerText = funcionario.nascimento;

        const colunaTelefone = linha.insertCell();
        colunaTelefone.innerText = funcionario.telefone;

        const colunaEmail = linha.insertCell();
        colunaEmail.innerText = funcionario.email;

        const colunaFuncao = linha.insertCell();
        colunaFuncao.innerText = funcionario.funcao;

        const colunaAcoes = linha.insertCell();

        // Cria o botão de exclusão
        const botaoExcluir = document.createElement('button');
        botaoExcluir.classList.add('delete-button');
        botaoExcluir.addEventListener('click', () => {
          fetch(`https://api-pets.onrender.com/employer/${funcionario.id}`, {
            method: 'DELETE'
          })
            .then(response => response.json())
            .then(data => {
              console.log('Funcionário excluído com sucesso:', data);
              // Atualiza a tabela após a exclusão
              tabela.remove();
              listareexcluir(); // Chama a função novamente para atualizar a tabela
            })
            .catch(error => {
              console.error('Erro ao excluir funcionário:', error);
            });
        });

        colunaAcoes.appendChild(botaoExcluir);
      });

      document.body.appendChild(tabela);
      const cookies = document.cookie.split(';');
let loginData = null;

cookies.forEach(cookie => {
  const [key, value] = cookie.trim().split('=');
  if (key === 'login') {
    loginData = JSON.parse(value);
  }
});

console.log(loginData);



    })
    .catch(error => {
      console.error('Erro ao obter a lista de funcionários:', error);
    });
}