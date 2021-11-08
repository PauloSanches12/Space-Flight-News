<h1 align="center">
    <br>Space-Flight-News API<br/>
</h1>


<p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;
</p>

## :bookmark: Sobre

O **Space Flight News API** é uma API que disponibiliza para outras aplicações informações da Space Flight News sobre voos espaciais.

## :rocket: Tecnologias Utilizadas

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [Express](https://expressjs.com/)
-  [Axios](https://github.com/axios/axios)
-  [MongoDB](https://www.mongodb.com/atlas/database)
-  [Node Cron](https://www.npmjs.com/package/node-cron)

## Como rodar o projeto

1. Ter o [node](https://nodejs.org/en/) instalado na máquina e o [yarn](https://nodejs.org/en/) ou NPM.


### 1º passo 

Realize um `clone` do repositório para a sua maquina local.

```bash
git clone main <fork-link>
```

### 2º Passo
na pasta do projeto, instale as dependências necessárias.

```bash
yarn install
```

### 3º Passo

rode o projeto com o comando.
```bash
yarn dev
```
### 4º Passo
acesse seu local na porta 3333.
```bash
localhost:3333
```
*Utilize o Insomnia ou outro programa similar para testar as demais rotas

### Lista de Rotas

- `[GET]/: ` Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"
- `[GET]/articles/:`   Listar todos os artigos da base de dados
- `[GET]/articles/{id}:` Obter a informação somente de um artigo
- `[POST]/articles/:` Adicionar um novo artigo
- `[PUT]/articles/{id}:` Atualizar um artigo baseado no `id`
- `[DELETE]/articles/{id}:` Remover um artigo baseado no `id`

### challenge by coodesh 
