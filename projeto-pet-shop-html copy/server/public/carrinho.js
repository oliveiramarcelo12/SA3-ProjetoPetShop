// Variável para armazenar os itens do carrinho
var carrinhoItens = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco, imagem) {
    var novoItem = {
        id: Date.now(),  // Adiciona um identificador único baseado no timestamp
        nome: nome,
        preco: preco,
        imagem: imagem,
        quantidade: 1
    };

    // Verifica se o item já está no carrinho
    var itemExistente = carrinhoItens.find(function (item) {
        return item.id === novoItem.id;
    });

    // Se o item já existe, incrementa a quantidade, senão adiciona o novo item
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinhoItens.push(novoItem);
    }
     // Salva o carrinho no armazenamento local ou em outro local, se necessário
     salvarCarrinho();
     atualizarCarrinho();
}

// Função para remover um item do carrinho
function removerDoCarrinho(nome) {
    carrinhoItens = carrinhoItens.filter(function (item) {
        return item.nome !== nome;
    });

    // Salva o carrinho no armazenamento local ou em outro local, se necessário
    salvarCarrinho();
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinhoItens = [];

    // Salva o carrinho no armazenamento local ou em outro local, se necessário
    salvarCarrinho();
}
// Função para atualizar a exibição do carrinho na página
function atualizarCarrinho() {
    // Implemente a lógica para atualizar a exibição do carrinho na página, se necessário
    console.log(carrinhoItens);

    // Por exemplo, você pode adicionar código aqui para atualizar a interface do carrinho na página
}


function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
    atualizarCarrinho();  // Chama a função para atualizar a interface do carrinho
}


// Função para carregar o carrinho armazenado anteriormente
function carregarCarrinho() {
    var carrinhoArmazenado = localStorage.getItem('carrinho');
    if (carrinhoArmazenado) {
        carrinhoItens = JSON.parse(carrinhoArmazenado);
    }
}

// Chama a função para carregar o carrinho ao carregar a página
carregarCarrinho();
