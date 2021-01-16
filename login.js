var tentativa = 3; // numero de tentativas.
// depois de carregar no botão de login

//var r_email=["p@gmail.com","g@gmail.com"];
//var r_pass=[123,321];

   
localStorage.setItem("mail",JSON.stringify(r_email));
localStorage.setItem("pass",JSON.stringify(r_pass));


var m = JSON.parse(localStorage.getItem("mail"));
var p = JSON.parse(localStorage.getItem("pass"));

function validar(){
    var nome = document.getElementById("nome").value;
    var pass = document.getElementById("pass").value;
   
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
    console.log(m);
    console.log(p);
    localStorage.removeItem("mail");
    localStorage.removeItem("pass");
    localStorage.setItem("mail",JSON.stringify(r_email));
    localStorage.setItem("pass",JSON.stringify(r_pass));

    var x = JSON.parse(localStorage.getItem("mail"));
    var y = JSON.parse(localStorage.getItem("pass"));
    console.log(x);


}