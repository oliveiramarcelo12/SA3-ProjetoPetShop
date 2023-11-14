document.addEventListener("DOMContentLoaded", function () {
    const produtos = document.querySelectorAll('.produto');
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    const limparCarrinhoBtn = document.getElementById('limpar-carrinho');

    let carrinho = [];

    produtos.forEach(produto => {
        const botaoAdicionar = produto.querySelector('.adicionar-carrinho');
        botaoAdicionar.addEventListener('click', () => {
            adicionarAoCarrinho(produto);
            atualizarCarrinho();
        });
    });

    limparCarrinhoBtn.addEventListener('click', () => {
        carrinho = [];
        atualizarCarrinho();
    });

    function adicionarAoCarrinho(produto) {
        const nome = produto.dataset.nome;
        const preco = parseFloat(produto.dataset.preco);
        const itemCarrinho = carrinho.find(item => item.nome === nome);

        if (itemCarrinho) {
            itemCarrinho.quantidade++;
        } else {
            carrinho.push({ nome, preco, quantidade: 1 });
        }
    }

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = '';
        let total = 0;

        carrinho.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}`;
            listaCarrinho.appendChild(listItem);

            total += item.preco * item.quantidade;
        });

        totalCarrinho.textContent = `R$ ${total.toFixed(2)}`;
    }
});
