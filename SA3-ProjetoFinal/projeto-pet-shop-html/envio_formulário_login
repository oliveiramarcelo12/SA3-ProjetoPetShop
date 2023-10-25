<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupere o e-mail e a senha fornecidos pelo usuário
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Valide os dados (por exemplo, verifique se os campos estão preenchidos)

    // Conecte-se ao banco de dados (substitua com suas credenciais)
    $conexao = new mysqli("localhost", "seu_usuario", "sua_senha", "seu_banco_de_dados");

    // Consulta para verificar se o usuário existe e a senha está correta
    $query = "SELECT * FROM usuarios WHERE email = '$email'";
    $resultado = $conexao->query($query);

    if ($resultado->num_rows > 0) {
        $usuario = $resultado->fetch_assoc();
        if (password_verify($senha, $usuario["senha"])) {
            // Senha correta, faça login do usuário (por exemplo, criando uma sessão)
            session_start();
            $_SESSION["email"] = $email;
            header("Location: pagina_de_sucesso.php"); // Redirecione para a página de sucesso
        } else {
            $erro = "Senha incorreta";
        }
    } else {
        $erro = "Usuário não encontrado";
    }

    // Feche a conexão com o banco de dados
    $conexao->close();
}
?>
