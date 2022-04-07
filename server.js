const { index: listarTodos, store: adicionar, find: listarPorId, update: atualizar, exclude: remover } = require("./controller/cofre");

const app = require("./app");
var ip = require("ip");
const cors = require('cors');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "http://144.22.210.64:4200");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

console.dir ( ip.address() );
const port = 3000;

console.log(`Goal Cofre starting ...`)

app.listen(port, () => {
    console.log(`Goal Cofre listening at ${ip.address()}:${port}`)
})

// root
//app.get("/", homePage);

// Create
app.post("/cofres", adicionar);

// Read
app.get("/cofres", listarTodos);
app.get("/cofres/:idCofre", listarPorId);

// Update
app.put("/cofres/:idCofre", atualizar);

// Delete
app.delete("/cofres/:idCofre", remover);