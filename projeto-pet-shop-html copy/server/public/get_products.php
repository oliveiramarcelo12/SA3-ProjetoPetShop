<?php
// Configurações do banco de dados (ajuste conforme necessário)
$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'king';

// Conectar ao banco de dados
$conn = new mysqli($hostname, $username, $password, $database);

// Verificar a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Consulta SQL para obter produtos
$sql = "SELECT * FROM produtos";
$result = $conn->query($sql);

// Exibir produtos
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo '<div class="carousel-item">';
        echo '<div class="col">';
        echo '<div class="card" style="width: 18rem;">';
        echo '<img src="' . $row["imagem"] . '" class="card-img-top" alt="' . $row["nome"] . '">';
        echo '<div class="card-body">';
        echo '<h5 class="card-title">' . $row["nome"] . '</h5>';
        echo '<p class="card-text">' . $row["descricao"] . '</p>';
        echo '<a href="' . $row["link"] . '" class="btn btn-primary">Comprar</a>';
        echo '</div></div></div></div>';
    }
} else {
    echo 'Nenhum produto encontrado.';
}

// Fechar a conexão
$conn->close();
?>
