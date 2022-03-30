const {adicionar, alterar, remover, listarPorId, listarTodos} = require("../services/cofres");

const index = async (req,res) => {

    try {
        const cofres = await listarTodos();
        res.send(cofres);
        console.info(cofres);
    } catch(erro){
        console.error(erro);
    }
}

const store = async(req,res) => {
    try {
        const cofre = req.body;

        const retorno = await adicionar(cofre);
        cofre.id = retorno.insertId;
        res.status(201).send(cofre);

    } catch(erro){
        console.error(erro);
    }
}

const find = async(req,res) => {

    try {
        const { idCofre } = req.params;

        console.log("id is: "+idCofre);

        const [cofre] = await listarPorId(idCofre);

        if(!cofre)
            return res.sendStatus(404).send({erro:"Cofre não encontrado"});
        res.send(cofre);

    } catch(erro){
        console.error(erro);
    }
}
const update = async(req,res) => {
    try {
        const cofre = req.body;
        const { idCofre } = req.params;
        const retorno = await alterar(cofre, idCofre);
        console.log(retorno.affectedRows);
        res.sendStatus(200);

    } catch(erro){
        console.error(erro);
    }
}

const exclude = async(req,res) => {
    try {
        const cofre = req.body;
        const { idCofre } = req.params;

        const retorno = await remover(idCofre);
        res.sendStatus(200);

    } catch(erro){
        console.error(erro);
    }
}

module.exports = { index, store, find, update, exclude}