var tentativa = 3; // numero de tentativas.
// depois de carregar no botão de login



if(localStorage.getItem("mail")==null){
    localStorage.setItem("mail",JSON.stringify(["p@gmail.com","g@gmail.com"]));
    localStorage.setItem("pass",JSON.stringify(["123","321"]));
}



function validar(){
    var m = JSON.parse(localStorage.getItem("mail"));
    var p = JSON.parse(localStorage.getItem("pass"));
    var nome = document.getElementById("nome").value;
    var pass = document.getElementById("pass").value;
    console.log(m);
    console.log(p);
    for (const i in m){
        if ( nome == m[i] && pass == p[i]){
            alert ("Login com sucesso");
            window.location = "index.html"; // Redireciona 
            return false;
        }
    }
        tentativa --;// Decrementing by one.
        alert("tens "+tentativa+" tentativas;");
        // Disabling fields after 3 attempts.
        
        if( tentativa == 0){
            document.getElementById("nome").disabled = true;
            document.getElementById("pass").disabled = true;
            document.getElementById("submit").disabled = true;
        return false;
            }
    
    
}
function registar(){
    var m = JSON.parse(localStorage.getItem("mail"));
    var p = JSON.parse(localStorage.getItem("pass"));

    var nome = document.getElementById("nome").value;
    var pass = document.getElementById("pass").value;

        for (const i in m){
            if ( nome == m[i] && pass == p[i]){
                alert ("registo já existe");
                window.location = "login.html"; // Redireciona 
                return false;
            }
        }    
    m.push(nome);
    p.push(pass);
    localStorage.setItem("mail",JSON.stringify(m));
    localStorage.setItem("pass",JSON.stringify(p));

}