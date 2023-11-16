var carrinhoItens = obterCarrinho();

function adicionarAoCarrinho(nome, preco, imagem) {
    carrinhoItens.push({ nome: nome, preco: preco, imagem: imagem });
    salvarCarrinho();
    atualizarCarrinho();
}

function salvarCarrinho() {
    // Salva o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
}

function obterCarrinho() {
    // Obtém o carrinho do localStorage
    var carrinho = localStorage.getItem('carrinho');
    return carrinho ? JSON.parse(carrinho) : [];
}
 // Limpar o carrinho
 $('#limpar-carrinho').click(function () {
    carrinhoItens = [];
    salvarCarrinho();
    atualizarCarrinho();
});
function atualizarCarrinho() {
    // Atualiza o conteúdo do carrinho na página
    $('#lista-carrinho').empty();
    var total = 0;

    carrinhoItens.forEach(function (item) {
        // Use os dados para exibir os produtos no carrinho
        $('#lista-carrinho').append(
            '<li>' +
            '<img src="/img' + item.imagem + '" alt="' + item.nome + '">' +
            item.nome + ' - R$ ' + item.preco.toFixed(2) +
            '</li>'
        );

        total += item.preco;
    });

    $('#total-carrinho').text('R$ ' + total.toFixed(2));
}
