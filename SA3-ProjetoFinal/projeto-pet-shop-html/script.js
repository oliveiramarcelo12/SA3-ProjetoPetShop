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
