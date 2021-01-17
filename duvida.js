if(localStorage.getItem("ArrayDuvidas")==null){
    var ArrayDuvidas=["paulo@gmail.com","Paulo","Gostava que tivessem tema de naruto"];
    localStorage.setItem("ArrayDuvidas",JSON.stringify(ArrayDuvidas));

}



function guardar(){

    var mail = document.getElementById("mail").value;
    var nome = document.getElementById("nome").value;
    var texto = document.getElementById("texto").value;
    var ArrayDuvidas =JSON.parse(localStorage.getItem("ArrayDuvidas"));//ler os valores
    ArrayDuvidas.push(mail);
    ArrayDuvidas.push(nome);
    ArrayDuvidas.push(texto);

   
    
    localStorage.setItem("ArrayDuvidas",JSON.stringify(ArrayDuvidas));

    var ArrayDuvidas =JSON.parse(localStorage.getItem("ArrayDuvidas"));//refresca var para fazer o for

    console.log(ArrayDuvidas.length);
    
    for (var i = 0; i < ArrayDuvidas.length; i=i+3) {
        
        console.log("mail");
        console.log(ArrayDuvidas[i]);

        console.log("nome");
        console.log(ArrayDuvidas[i+1]);

        console.log("texto");
        console.log(ArrayDuvidas[i+2]);
        console.log(i);
      } 



    window.location = "duvidas.html"; // Redireciona 
  
}