// cadastro.js

// Função para validar o formulário de contato
function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("exampleFormControlTextarea1").value;

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    return true;
}

// Event listener para o envio do formulário
var formulario = document.getElementById("formularioContato");
if (formulario) {
    formulario.addEventListener("submit", function (e) {
        if (!validarFormulario()) {
            e.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });
}

