document.getElementById('inputAltura').focus(); // aqui usei o focus para quando o usuario recarregar a pagina ja ir direto pro input altura

        mensangemUsuario = document.getElementById('Mensagem');

        function calculaImc() {

            var altura = document.getElementById("inputAltura").value;
            var peso = document.getElementById("inputPeso").value;

            var imcResultado = peso / (altura * altura);

            if (altura === '') {
                alert('O campo altura está vazio!')
            }

            if (peso === '') {
                alert('O campo peso está vazio!')
            }

            if (imcResultado < 18.5) {
                mensangemUsuario.innerText = `Seu IMC é ${imcResultado.toFixed(2)}:  está em Magreza!`;
            }

            if (imcResultado >= 18.5 && imcResultado <= 24.9) {
                mensangemUsuario.innerText = `Seu IMC é ${imcResultado.toFixed(2)}:  está normal!`;
            }

            if (imcResultado >= 25 && imcResultado <= 29.9) {
                mensangemUsuario.innerText = `Seu IMC é ${imcResultado.toFixed(2)}:  está Sobrepeso!`;
            }

            if (imcResultado >= 30 && imcResultado <= 34.9) {
                mensangemUsuario.innerText = `Seu IMC é ${imcResultado.toFixed(2)}:  está em Obesidade grau 1!`;
            }

            if (imcResultado >= 35 && imcResultado <= 39.9) {
                mensangemUsuario.innerText = `Seu IMC é ${imcResultado.toFixed(2)}:  está em Obesidade grau 2!`;
            }

            if (imcResultado > 40) {
                mensangemUsuario.innerText = `Seu IMC é ${imcResultado.toFixed(2)}:  está em Obesidade grau 3!`;
            }
        }
