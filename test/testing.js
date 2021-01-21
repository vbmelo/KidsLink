var a=[1,2,3];
console.log(a);
a.splice(1);
console.log(a);













if(localStorage.getItem("mail")==null){
    localStorage.setItem("mail",JSON.stringify(["cliente@gmail.com","organizador@gmail.com","administrador@gmail.com","t"]));
    localStorage.setItem("pass",JSON.stringify(["cli","org","admin","t"]));
    localStorage.setItem("tipo_u","1");
    localStorage.setItem("mail_l",JSON.stringify("l"));
    
}

var temp = JSON.parse(localStorage.getItem("mail_l"));
if(temp=="l" || temp==null){
    document.querySelector("#bnt").textContent="Login/Registar";
    console.log("3");
    
}
else{
    document.querySelector("#bnt").textContent="Logout";
    console.log("1");
    

}

$('#myModalLogin').on('show.bs.modal', function (e) {
    console.log("55");
    var button = e.relatedTarget;
    console.log(document.querySelector("#bnt").textContent=="Logout");
    if(document.querySelector("#bnt").textContent=="Logout") {
        console.log("56");
        window.location="testing.html";
        localStorage.setItem("mail_l",JSON.stringify("l"));
        
    }  
  });




function update(){



}

    

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");




function regTabFun(){
    event.preventDefault();

    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";

    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function loginTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";

    loginTab.style.backgroundColor="rgb(12, 132, 189)";
    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function forTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";

    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

}




function register(){
    event.preventDefault();
    var emailArray=JSON.parse(localStorage.getItem("mail"));
    var passwordArray=JSON.parse(localStorage.getItem("pass"));
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        alert("Email necessario.");
        return ;
    }
    else if (password == ""){
        alert("Password necessario.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password necessario.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password não são iguais.");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);
        localStorage.setItem("mail",JSON.stringify(emailArray));
        localStorage.setItem("pass",JSON.stringify(passwordArray));
        alert(email + "  Obrigado por se registar \nTente fazer login agora");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " Já se encontra registado.");
        return ;
    }
}



function forgot(){
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email necessario.");
            return ;
        }
        alert("Email não existe.");
        return ;
    }

    alert("email enviado comfirme em 24 horas. \n Obrigado");
    document.getElementById("fe").value ="";
}




function login(){
    event.preventDefault();
    
      
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var emailArray=JSON.parse(localStorage.getItem("mail"));
    var passwordArray=JSON.parse(localStorage.getItem("pass"));
    var i = emailArray.indexOf(email);
    

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email necessario.");
            return;
        }
        alert("Email não existe.");
        return;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password necessario.");
            return ;
        }
        alert("Password não é igual.");
        return ;
    }
    else {
        alert(email + "Bem vindo.");
        localStorage.setItem("mail_l",JSON.stringify(email));
        

        

        if(email=="organizador@gmail.com"){
            localStorage.setItem("tipo_u","2")
            window.location = "organizador.html";
            return ;
        }
        if(email=="administrador@gmail.com"){
            localStorage.setItem("tipo_u","3")
            window.location = "admin.html";
            return ;
        }

        localStorage.setItem("tipo_u","1")


        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        window.location = "testing.html";
        return ;
    }
}

function check(){











}