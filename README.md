O **Pet Shop** é uma aplicação web que permite aos usuários encontrar o melhor pet shop com base nos serviços desejados, 
na data de agendamento e na quantidade de cachorros. O sistema consulta uma lista de pet shops disponíveis e retorna o mais barato para o usuário.

**TECNOLOGIAS UTILIZADAS**

**Frontend:**

React.js

HTML

CSS

Axios

Typescript

**Backend:**

Node.js

Express.js

PostgreSQL

Sequelize ORM


**Funcionalidades**

Seleção do serviço desejado (por exemplo, Banho e Tosa).
Escolha da data de agendamento.
Definição da quantidade de cachorros grandes e pequenos.
Consulta ao backend para encontrar o pet shop mais barato.
Exibição do nome do pet shop, distância e preço final.

**Instalação**
**Pré-requisitos**

Node.js e npm instalados.

PostgreSQL instalado e em execução.

**CONFIGURAÇAO DO BACKEND**

É necessario que seja realizada a instalçao do docker, caso nao tenha.

Inicie o contêiner Docker com o comando docker-compose up --build.

Após o contêiner estar ativo, execute npm run dev para iniciar o banco de dados.


**CONFIGURAÇÃO FRONTEND**

Instale o Vite, caso nao tenha, executando npm install vite.

Execute npm run dev para iniciar o frontend.

**USO**

Pressione o botão "Agenda serviços" ou no botão "Agendar" no menu, para agendar os serviços e ser redirecionado para escolher o melhor e mais barato pet shop,
de acordo com as opçoes selecionadas.Se caso o usuário desejar voltar à tela principal, pode clicar no botão "Home".

**Obs**

Os componentes serviçoes e sobre sao componentes sem conteudo, sao componentes "fakes", serao implementados os conteudos futuramente.
