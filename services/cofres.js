const { CODEFRESH } = require("ci-info");
const conexao = require("../infra/conexao");


const adicionar = (cofre) => {
    const sql = "insert into goalcofre set ?";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql, cofre);

        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

const alterar = (cofre,id) => {
    const sql = "update goalcofre set idConta=?, descricao_meta=?, nome=?, valor_meta=?, valor_acumulado=?,vencimento_meta=? where idCofre=?";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql, [cofre.idConta, cofre.descricao_meta, cofre.nome, cofre.valor_meta, cofre.valor_acumulado, cofre.vencimento_meta, id]);
console.log(">>>>>>>>>>>"+query);
        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

const remover = (id) => {
    const sql = "delete from goalcofre where idCofre = ?";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql, id);

        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

const listarTodos = () => {
    const sql = "SELECT * FROM goalcofre";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql);

        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

const listarPorId = (id) => {
    const sql = "select * from goalcofre where idCofre = ?";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql, id);

        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

module.exports = { adicionar, alterar, remover, listarTodos, listarPorId}