<template>
     <header>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <img src="IMG/"  logo width="40vh">
          <a class="navbar-brand" href="index.html">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">Produtos</a>
                <ul class="submenu">
                  <li><a href="racao.html">Ração</a></li>
                  <li><a href="acessorios.html">Acessórios</a></li>
                </ul>
              </li>
              <li class="nav-formulario">
                <a class="nav-link active" aria-current="page" href="">Serviços Pet</a>
              </li>
              <li class="nav-login">
                <a class="nav-link active" href="">Cadastro</a>
              </li>
              <li class="nav-login">
                <a class="nav-link active" href="">Login</a>
              </li>
              <li class="nav2-item">
                <a class="nav-link active" href="meucarrinho.html">
                  <img src="carrinhoComprar.png" alt="Carrinho" width="40">
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="Buscar" placeholder="Buscar Eventos " aria-label="Buscar">
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
   </header> 
    <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="imagem1.jpg" class="d-block w-100" alt="Imagem 1">
        </div>
        <div class="carousel-item">
          <img src="imagem2.jpg" class="d-block w-100" alt="Imagem 2">
        </div>
        <div class="carousel-item">
          <img src="imagem3.jpg" class="d-block w-100" alt="Imagem 3">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="produto1.jpg" class="card-img-top" alt="Produto 1">
          <div class="card-body">
            <h5 class="card-title">Produto 1</h5>
            <p class="card-text">Descrição do Produto 1</p>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="produto2.jpg" class="card-img-top" alt="Produto 2">
          <div class="card-body">
            <h5 class="card-title">Produto 2</h5>
            <p class="card-text">Descrição do Produto 2</p>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="produto3.jpg" class="card-img-top" alt="Produto 3">
          <div class="card-body">
            <h5 class="card-title">Produto 3</h5>
            <p class="card-text">Descrição do Produto 3</p>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
   <footer>
    <a href="sobre.html" class="linkmenu">Quem Somos</a>
    <a href="termos.html" class="linkmenu">Termos e Políticas</a>
    <a href="etica.html" class="linkmenu">Ética e Conduta</a>
    <a href="contato.html" class="linkmenu">
      <img src="telefone.png" alt="Contato" width="20">
    </a>
    <a href="redes-sociais.html" class="linkmenu">Siga-nos</a>
  </footer>
</template>

<script>
export default {
  name: "Home",
};
</script>
