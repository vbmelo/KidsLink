if(localStorage.getItem("ArrayDuvidas")==null){
    var ArrayDuvidas=[];
    localStorage.setItem("ArrayDuvidas",ArrayDuvidas);
    localStorage.setItem("index","0");
}



function guardar(){
    var mail = document.getElementById("mail").value;
    var nome = document.getElementById("nome").value;
    var texto = document.getElementById("texto").value;
    console.log(mail);
    console.log(nome);
    console.log(texto);
    var NovaDuvida= [mail,nome,texto];
    console.log(NovaDuvida);
    ArrayDuvidas.push(NovaDuvida);
    localStorage.settItem("ArrayDuvidas");
    var i=localStorage.getItem(Index);
    i++;
    localStorage.setItem("index",i);
    window.location = "index.html"; // Redireciona 
}