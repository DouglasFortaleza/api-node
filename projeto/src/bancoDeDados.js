const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

// Se chegar sem o id, aqui ele ganha um
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id       // se a id do produto não estiver setado
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos }