/* Função de validação  */
function validate() {
    var retVal = true; /* Vamos partir do princípio de que o formulário está válido ... */
    var _nome = document.getElementById("Nome");
    var _nomeError = document.getElementById("NomeError");
    if (_nome.value.trim().length < 3) { /*o Metodo trim() remove os espacos em branco(whitespaces) do inicio de do fim de um texto */
        retVal = false;
        _nomeError.classList.add("d-block");
        _nomeError.classList.remove("d_none");
    }
    else {
        _nomeError.classList.add("d_none");
        _nomeError.classList.remove("d_block");
    }

    var _morada = document.getElementById("Morada");
    var _moradaError = document.getElementById("MoradaError");
    var palavrasArray = _morada.value.split(' '); /*O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings num array e retorna o array. */
    if (palavrasArray.length < 3) { 
        retVal = false;
        _moradaError.classList.add("d-block");
        _moradaError.classList.remove("d_none");
    }
    else {
        _moradaError.classList.remove("d-block");
        _moradaError.classList.add("d_none");
    }
    
    var _mail = document.getElementById("Mail");
    var _mailError = document.getElementById("MailError");
    if (_mail.value.trim().length < 3) { /*o Metodo trim() remove os espacos em branco(whitespaces) do inicio de do fim de um texto */
        retVal = false;
        _mailError.classList.add("d-block");
        _mailError.classList.remove("d_none");
    }
    else {
        _nomeError.classList.add("d_none");
        _nomeError.classList.remove("d_block");
    }

    var _assentosSelecionados = document.querySelectorAll('input[name="assento"]:checked').length;
    var _assentoError = document.getElementById("AssentoError");
    if (_assentosSelecionados < 2) {
        retVal = false;
        _assentoError.classList.add("d-block");
        _assentoError.classList.remove("d_none");
    }
    else {
        _assentoError.classList.remove("d-block");
        _assentoError.classList.add("d_none");
    }

    return retVal;
}