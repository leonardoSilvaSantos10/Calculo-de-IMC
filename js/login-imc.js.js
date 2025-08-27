document.getElementById("inputSenha").focus();

function verificaSenha() {
    let senha = document.getElementById("inputSenha").value;
    let caractere = /[^a-zA-Z0-9]/.test(senha);

    if (senha.length == 0) {
        alert("Por favor, preencha o campo.");
    } else if (senha.length < 8) {
        document.getElementById("texto").textContent = "A senha deve conter no mínimo 8 digitos!";
    } else if (!caractere) {
        document.getElementById("texto").textContent = "A senha deve conter ao menos 1 caractere especial!";
    } else {
        document.getElementById("texto").textContent = "Senha válida";
        window.location.href = "index.html";
    }
}