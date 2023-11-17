 // Suponha que você tenha uma variável indicando se o usuário está logado
    var usuarioLogado = false;

    if (usuarioLogado) {
        // Se o usuário estiver logado, exibe o menu logado
        var nomeUsuario = "Nome do Usuário";  // Substitua isso pelo nome real do usuário
        document.write("<p>Bem-vindo, " + nomeUsuario + "!</p>");
        document.write("<ul>");
        document.write("<li>Opção 1</li>");
        document.write("<li>Opção 2</li>");
        document.write("<li><a href='#'>Sair</a></li>");
        document.write("</ul>");
    } else {
        // Se o usuário não estiver logado, exibe o menu de login
        document.write("<ul>");
        document.write("<li><a href='#'>Fazer login</a></li>");
        document.write("<li><a href='#'>Sair</a></li>");
        document.write("</ul>");
    }
