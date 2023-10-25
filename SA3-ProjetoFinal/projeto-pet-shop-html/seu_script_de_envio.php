<?php
// Conexão com o banco de dados (substitua as credenciais com as suas)
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$database = "seu_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $database);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Processamento dos dados do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $senha = password_hash($_POST["senha"], PASSWORD_BCRYPT); // Recomendado armazenar senhas de forma segura

    // Inserir os dados no banco de dados
    $sql = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $senha);

    if ($stmt->execute()) {
        echo "Cadastro bem-sucedido. Você pode fazer login agora.";
    } else {
        echo "Erro no cadastro: " . $stmt->error;
    }

    $stmt->close();
}

// Fechar a conexão com o banco de dados
$conn->close();
?>
