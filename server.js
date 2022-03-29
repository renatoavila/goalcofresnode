const { index: listarTodos, store: adicionar, find: listarPorId, update: atualizar, exclude: remover } = require("./controller/cofre");
//const {homePage} =require("../../GoalAngular/pages/index.ts")
const app = require("./app");

var ip = require("ip");
console.dir ( ip.address() );

const port = 3000;

console.log(`Goal User starting ...`)

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