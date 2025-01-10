# Pet Shop - Encontre o melhor serviço pelo menor preço!

O **Pet Shop** é uma aplicação web que permite aos usuários encontrar o melhor pet shop com base nos serviços desejados, 
na data de agendamento e na quantidade de cachorros. O sistema consulta uma lista de pet shops disponíveis e retorna o mais barato para o usuário.

# 💻 Tecnologias utilizadas:
 ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![typescript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Axios.js](https://img.shields.io/badge/axios.js-854195?style=for-the-badge&logo=axios&logoColor=5A29E4) ![Express.js](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?style=flat-square&logo=sequelize&labelColor=52B0E7&logoColor=FFF)

## 📁 Funcionalidades

- Seleção do serviço desejado (por exemplo, Banho e Tosa).
- Escolha da data de agendamento.
- Definição da quantidade de cachorros grandes e pequenos.
- Consulta ao backend para encontrar o pet shop mais barato.
- Exibição do nome do pet shop, distância e preço final.
## 🛠️ Instalação

Instale Node.js, npm, postgresql, docker e vite instalados.

```bash
  npm install
  https://nodejs.org/pt
  https://www.postgresql.org/download/
  https://docs.docker.com/desktop/setup/install/windows-install/
  https://vite.dev/guide/
```


## ⚙️ CONFIGURAÇAO DO BACKEND

Com o docker instalado e PostgreSQL em execução.

```bash
  Inicie o contêiner Docker com o comando docker-compose up --build.
  Após o contêiner estar ativo, execute npm run dev para iniciar o banco de dados.
```

## ⚙️ CONFIGURAÇAO DO FRONTEND

Com o vite instalado.

```bash
  Execute npm run dev para iniciar o frontend.
```
## 🔨 Uso

```
Pressione o botão "Agenda serviços" ou no botão "Agendar" no menu, para agendar os serviços e ser redirecionado para escolher o melhor e mais barato pet shop,
de acordo com as opçoes selecionadas.Se caso o usuário desejar voltar à tela principal, pode clicar no botão "Home".
```
## 🌐 Melhorias

Os componentes serviçoes e sobre sao componentes sem conteudo, sao componentes "fakes", sera implementado os conteudos futuramente.

