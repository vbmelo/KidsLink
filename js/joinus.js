if(localStorage.getItem("ArrayParceiros")==null){
    var ArrayParceiros=["Magico","Rua da Paz Nº74","Diogo_Mago@gmail.com"];//nome,morada,mail
    localStorage.setItem("ArrayParceiros",JSON.stringify(ArrayParceiros));

}


function guardar(){

    var nome = document.getElementById("nome").value;
    var morada = document.getElementById("morada").value;
    var mail = document.getElementById("mail").value;
    var ArrayDuvidas =JSON.parse(localStorage.getItem("ArrayParceiros"));//ler os valores
    ArrayParceiros.push(nome);
    ArrayParceiros.push(morada);
    ArrayParceiros.push(mail);

    localStorage.setItem("ArrayParceiros",JSON.stringify(ArrayParceiros));
    window.location = "duvidas.html"; // Redireciona 
  
}

function listarParceiros() {
    var contadorRow = 0;
    console.log("entrei3");
    $("#Table_Parceiro").show();

    var ArrayParceiros =JSON.parse(localStorage.getItem("ArrayParceiros"));

   
   if(ArrayParceiros.length>=3){
        var i =  0;
        
        $.each(ArrayParceiros, function(){
            if (i  >= ArrayParceiros.length) {
                console.log("brakpoint??");
                return;
            }
            $("#tbody_Parceiro").append(`
            <tr id="Tr_Lista"><br />
            <th scope="row">${contadorRow}</th><br />
            <td id="Mail_Lista">${ArrayParceiros[i]}</td><br />
            <td id="Nome_Lista">${ArrayParceiros[i+1]}</td><br />
            <td id="Texto_Lista">${ArrayParceiros[i+2]}</td><br />
            </tr>
            `);
            contadorRow +=1;
            i += 3;
            
        });
    }
   // else{ tentar fazer caso n haja dados
   //     $("#tbody_Lista").append(`Não existe sugestões ou duvidas`);
   // }
} 