<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
      // Use jQuery para carregar o cabeçalho em todas as páginas
      $(function () {
        $("#header").load("header.html");
      });
      $(function () {
        $("#footer").load("footer.html");
      });
    </script>
    

    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body id="bodyIndex">
    <!-- header -->
    <div id="header"></div>

  <br><br>

  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div id="meuCarrossel" class="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="carousel-img" src="img/Imagem1.jpg" alt="Imagem 1">
          </div>
          <div class="carousel-item">
            <img class="carousel-img" src="img/preçobaixo.jpg" alt="Imagem 2">
          </div>
          <div class="carousel-item">
            <img class="carousel-img" src="img/propaganda.jfif" alt="Imagem 3">
          </div>
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
  <br>
 
  <div class="carousel-container">
    <div class="carousel" id="productCarousel">
      <!-- Produtos serão adicionados dinamicamente aqui -->
    </div>
    <button onclick="prevSlide()">Anterior</button>
    <button onclick="nextSlide()">Próximo</button>
  </div>

  <br><br><br><br><br><br>
<!-- FOOTER -->

<div id="footer"></div>

    

</body><script src="index.js"></script>    
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
<script src="script.js"></script>
</html>

