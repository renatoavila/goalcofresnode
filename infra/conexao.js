// para iniciar o banco de dados no mysqlContainer
// docker run --name mysqlContainer -e MYSQL_ROOT_PASSWORD=rootPwd -e MYSQL_DATABASE=goal -e MYSQL_USER=goalUser -e MYSQL_PASSWORD=goalUserPwd -e MYSQL_HOST=127.0.0.1 -p 3307:3306 -d mysql:latest 

// para iniciar o server (do microservices)
// npm start

// para iniciar todas as apps em containers via docker compose
// docker-compose up

// teste da API via postman
//

const mysql = require("mysql2");


// usar este quando estiver rodando fora do container

const config = {
    host     : 'localhost',
    database : 'goal',
    user     : 'goalUser',
    password : 'goalUserPwd',
    port     : '3307'
}
const conexao = mysql.createConnection(config);

module.exports = conexao;


//   usar este quando estiver rodando dentro do container
/*  
const conexao =  mysql.createConnection({
    host            : 'goalcofre-db',
    port            : '3306',
    database        : 'goal',
    user            : 'goalUser',
    password        : 'goalUserPwd'
});

console.log("mysql connection success");

module.exports = conexao;
*/