# nlw Valoriza

## Setup

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [SQLite](https://www.sqlite.org/index.html)
- [uuid](https://www.npmjs.com/package/uuid?activeTab=readme)

### Add packages and create structures

```shell
yarn add typescript -D
touch src/server.ts
yarn add express
yarn add @types/express -D
yarn add ts-node-dev -D
```

### Create dev script

```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
  }
```

### Requests

- GET: Search a information
- POST: Create(insert) a information
- PUT: Hange a information
- DELETE: Remove a information
- PATCH: Update one information

#### Parameters

- Routes params: retrieve an specific item according information on the path. Ex: ```http://localhost/api/item/id123```
- Query params: ```http://localhost/api/item?color=blue&price=20```
- Body params: Used for POST, PUT or PATCH requests, and goes in the body of the request. Not used for GET requests. Ex:

```json
{
  "name":"item123",
  "color":"blue",
  "price":20
}
```

### DB

#### Entity

|Entity is a class that maps to a database table (or collection when using MongoDB).

Entity <-> ORM <-> BD

#### Repositories


### Rules

- Cadastro de usuário

  - [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  - [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  - [ ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  - [ ] Não é permitido cadastrar tag sem nome

  - [ ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  - [ ] Não é permitido um usuário cadastrar um elogio para si

  - [ ] Não é permitido cadastrar elogios para usuários inválidos

  - [ ] O usuário precisa estar autenticado na aplicação