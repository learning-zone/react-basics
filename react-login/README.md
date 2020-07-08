## React Login ( JWT Auth )


#### Project Description
> React Auth based on jwt and passport authentication. 


#### Rest APIs 

| Methods | Urls             | Actions             |
|---------|------------------|---------------------|
| POST    | /api/post/login  | Login an account    |
| GET     | /api/get/user    | Access User Content |
| POST    | /api/post/user   | Access New User     |



#### Technology

* React
* Material-UI
* Express.js
* bcryptjs
* jsonwebtoken
* Passport.js
* Session
* MSSQL


#### Installation 

```
  npm install

  npm start
```

#### Database Setup

`config.js`
```
let config = {
    "user": "sa",
    "password": "<your-db-password>",
    "server": "<your-db-ip-address>",
    "database": "<your-db-name>",
    "driver": "msnodesqlv8",
    "port": 1433
  };
```

#### Resources

* *[React](https://reactjs.org/)*
* *[PM2](https://pm2.keymetrics.io/)*
* *[Material-UI](https://material-ui.com/)*
* *[Json Web Token](https://github.com/auth0/node-jsonwebtoken)*
