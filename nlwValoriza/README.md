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

#### Migrations

|Is a table representation

```shell
yarn typeorm migration:create -n #migration name
# after create it, execute to create/update tables
yarn typeorm migration:run
```

#### Entity

|Entity is a class that maps to a database table (or collection when using MongoDB).

Entity <-> ORM <-> BD

#### Repositories
