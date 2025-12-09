# API SGP - Módulo Financeiro

API desenvolvida em Node.js para o sistema de Gestão Pessoal (SGP). Este módulo é responsável pelo **Gerenciamento de Finanças**, permitindo o cadastro de receitas e despesas, categorização e cálculo automático de saldo.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação da API.
- **PostgreSQL**: Banco de dados relacional.
- **pg**: Driver de conexão com o PostgreSQL.
- **JWT (JsonWebToken)**: Para autenticação segura.

## 📂 Arquitetura

O projeto segue a **Arquitetura em Camadas** para separar responsabilidades:

- **Router**: Define as rotas e endpoints.
- **Controller**: Trata as requisições HTTP e respostas.
- **Service**: Contém as regras de negócio (ex: validações, cálculo de saldo).
- **Repository**: Executa os comandos SQL no banco de dados.

## ⚙️ Pré-requisitos

- Node.js instalado.
- PostgreSQL instalado e rodando.

## 🔧 Instalação e Configuração

1. **Clone o repositório:**
   git clone [https://github.com/tnzera/API_SGPs.git](https://github.com/tnzera/API_SGPs.git)
   cd API_SGPs
2. **Instale as dependências:**
   npm install
3. **Configure o Banco de Dados:**
   Crie um banco de dados no PostgreSQL chamado trabalho_sgp (ou outro nome de sua preferência).

   Abra o arquivo database.js e atualize as credenciais (user, password, database).
4. **Crie as Tabelas:**
   Execute o script SQL disponível no arquivo script bd no seu banco de dados para criar as tabelas usuarios, categorias e transacoes.
