let currentIndex = 0;
const carousel = document.getElementById("productCarousel");
const slides = document.querySelectorAll(".carousel-item");

// Obtém todas as imagens do carrossel com a classe .carousel-img
const imagens = document.querySelectorAll('.carousel-img');

// Define o tamanho desejado para as imagens
const larguraDesejada = 1220; // Substitua pelo tamanho desejado em pixels
const alturaDesejada = 700; // Substitua pelo tamanho desejado em pixels

// Aplica o tamanho desejado a cada imagem
imagens.forEach((imagem) => {
  imagem.style.width = `${larguraDesejada}px`;
  imagem.style.height = `${alturaDesejada}px`;
});
$(document).ready(function () {
  $('.product-card').hover(
    function () {
      // Quando o mouse passa por cima do elemento
      $(this).css('transform', 'scale(1.1)');
    },
    function () {
      // Quando o mouse sai do elemento
      $(this).css('transform', 'scale(1)');
    }
  );
});




function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + "%";
  carousel.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Adicione seus produtos dinamicamente
const produtos = ["Produto 1", "Produto 2", "Produto 3"];
produtos.forEach((produto) => {
  const item = document.createElement("div");
  item.classList.add("carousel-item");
  item.textContent = produto;
  carousel.appendChild(item);
});
function loadProducts() {
  $.ajax({
      url: 'get_products.php',
      type: 'GET',
      success: function (data) {
          $('#productCarousel').html(data);
      },
      error: function () {
          console.log('Erro ao carregar produtos.');
      }
  });
}


// Inicie o carrossel
loadProducts();
showSlide(currentIndex);