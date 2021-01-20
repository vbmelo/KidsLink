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

//     var ArrayDuvidas =JSON.parse(localStorage.getItem("ArrayDuvidas"));//refresca var para fazer o for

//     console.log(ArrayDuvidas.length);
// ///isto é o codigo para aceder a informação, 3 campos são uma sugestão, 
//     for (var i = 0; i < ArrayDuvidas.length; i=i+3) {
        
//         console.log("mail");
//         console.log(ArrayDuvidas[i]);

//         console.log("nome");
//         console.log(ArrayDuvidas[i+1]);

//         console.log("texto");
//         console.log(ArrayDuvidas[i+2]);
//       } 

    window.location = "duvidas.html"; // Redireciona 
  
}
var contadorRow = 0;
function listarDuvidas() {
    $("#Table_Duvidas").show();

    var ArrayDuvidas =JSON.parse(localStorage.getItem("ArrayDuvidas"));

    console.log("Length do array" + ArrayDuvidas.length);
   if(ArrayDuvidas.length>=3){
        var i =  0;
        
        $.each(ArrayDuvidas, function(){
            if (i  >= ArrayDuvidas.length) {
                console.log("brakpoint??");
                return;
            }
            $("#tbody_Lista").append(`
            <tr id="Tr_Lista"><br />
            <th scope="row">${contadorRow}</th><br />
            <td id="Mail_Lista">${ArrayDuvidas[i]}</td><br />
            <td id="Nome_Lista">${ArrayDuvidas[i+1]}</td><br />
            <td id="Texto_Lista">${ArrayDuvidas[i+2]}</td><br />
            </tr>
            `);
            contadorRow +=1;
            console.log('contador==' + contadorRow);
            console.log(ArrayDuvidas);
            i += 3;
            
        });
    }
   // else{ tentar fazer caso n haja dados
   //     $("#tbody_Lista").append(`Não existe sugestões ou duvidas`);
   // }
} 

 ///isto é o codigo para aceder a informação, 3 campos são uma sugestão, 
    // for (var i = 0; i < ArrayDuvidas.length; i=i+3) {
        
    //     console.log("mail");
    //     console.log(ArrayDuvidas[i]);
    //     $("#Mail_Lista").append(ArrayDuvidas[i+1]);
        

    //     console.log("nome");
    //     console.log(ArrayDuvidas[i+1]);
    //     $("#Nome_Lista").append(ArrayDuvidas[i+1]);

    //     console.log("texto");
    //     console.log(ArrayDuvidas[i+2]);
    //   } 