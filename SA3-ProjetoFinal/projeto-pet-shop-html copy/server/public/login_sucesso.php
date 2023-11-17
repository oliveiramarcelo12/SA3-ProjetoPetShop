<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Bem-Sucedido</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Seu cabeçalho ou navegação aqui -->
    
    <div class="container">
        <h1>Bem-vindo, <?php echo $_SESSION['user_nome']; ?>!</h1>
        <p>Você fez o login com sucesso.</p>
        
        <!-- Adicione mais conteúdo da página aqui, se necessário -->

        <a href="logout.php">Sair</a>
    </div>
    
    <!-- Seu rodapé aqui -->
</body>
</html>
