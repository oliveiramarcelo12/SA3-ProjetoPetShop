const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Adicione esta linha para importar o módulo path

const app = express();
const port = 3000;

// Configuração para servir arquivos estáticos
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Rota para a página principal com produtos (racao.html)
app.get('/racao', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota padrão para lidar com outros caminhos
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// Use o middleware bodyParser para analisar o corpo das solicitações como JSON
app.use(bodyParser.json());

// Lista simulada de itens no carrinho
let carrinhoItens = [];

// Endpoint para adicionar ao carrinho
app.post('/adicionar-ao-carrinho', function (req, res) {
    // Obtém os dados da solicitação POST
    const { nome, preco, imagem } = req.body;

    // Chama a função para adicionar ao carrinho
    adicionarAoCarrinho(nome, preco, imagem);

    // Envie uma resposta de sucesso de volta ao cliente
    res.status(200).json({ mensagem: 'Produto adicionado ao carrinho com sucesso.' });
});

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco, imagem) {
    var novoItem = {
        nome: nome,
        preco: preco,
        imagem: imagem,
        quantidade: 1
    };

    // Verifica se o item já está no carrinho
    var itemExistente = carrinhoItens.find(function (item) {
        return item.nome === novoItem.nome;
    });

    // Se o item já existe, incrementa a quantidade, senão adiciona o novo item
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinhoItens.push(novoItem);
    }

    // Salva o carrinho no armazenamento local ou em outro local, se necessário
    salvarCarrinho();
}

// Função para salvar o carrinho em algum local (pode ser local storage, servidor, etc.)
function salvarCarrinho() {
    // Implemente a lógica para salvar o carrinho, por exemplo, usando o local storage
    // Neste exemplo, estamos apenas imprimindo o carrinho no console
    console.log(carrinhoItens);
}

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
