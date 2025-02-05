document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Novo cadastro de usuários
    const usuarios = {
        "Fernando SR": "DIM1234", 
        "Thalita": "THALITA1234", 
        "Maria Fernanda": "NANDINHA1234", 
        "Welligton": "WELL1234", 
        "Rafael S": "RAFAEL1234"
    };

    // Limpando a mensagem de erro antes de verificar novamente
    errorMessage.textContent = "";
    errorMessage.classList.remove("show"); // Esconder erro ao tentar novamente

    // Verificando se o usuário e a senha estão corretos
    if (usuarios[username] && usuarios[username] === password) {
        // Armazenando o nome do usuário no localStorage
        localStorage.setItem("usuario", username);

        // Redirecionando para a página desejada
        window.location.href = "Design.html";
    } else {
        // Exibindo mensagem de erro se o login falhar
        errorMessage.textContent = "Usuário ou senha incorretos!";
        errorMessage.classList.add("show"); // Garante que fique visível
    }
});
