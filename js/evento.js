//id,regiao, Tipo de festa(nome),morada, preço, lugares, data, hora i, hora f
if(localStorage.getItem("ArrayEventos")==null){
    var evento = ["1","Aveiro","Festa Halloween","Rua do Brasil Mº44","15","30","31/10/2021","17:00","21:00","2","Aveiro","Festa Natal","Rua do Milhafre Mº12","20","60","25/12/2021","15:00","19:00","3","Aveiro","Festa Páscoa","Rua da Paz Mº59","10","20","4/4/2021","15:00","19:00","4","Lisboa","Festa de Halloween","Rua do Probe Mº74","15","30","31/10/2021","17:00","21:00","5","Lisboa","Festa de Natal","Rua do Tomas Cabral Mº19","20","60","25/12/2021","15:00","19:00","6","Lisboa","Festa de Páscoa","Rua da Sossego Mº99","10","20","4/4/2021","15:00","19:00"];                 
    localStorage.setItem("ArrayEventos",JSON.stringify(evento));
}

//info das festas no array
//1,"Aveiro","Festa Halloween","Rua do Brasil Mº44","15","30","31/10/2021","17:00","21:00",
//2,"Aveiro","Festa Natal","Rua do Milhafre Mº12","20","60","25/12/2021","15:00","19:00",
//3"Aveiro","Festa Páscoa","Rua da Paz Mº59","10","20","4/4/2021","15:00","19:00",

//4,"Lisboa","Festa de Halloween","Rua do Probe Mº74","15","30","31/10/2021","17:00","21:00",
//5,"Lisboa","Festa de Natal","Rua do Tomas Cabral Mº19","20","60","25/12/2021","15:00","19:00",
//6,"Lisboa","Festa de Páscoa","Rua da Sossego Mº99","10","20","4/4/2021","15:00","19:00"

//id,regiao, Tipo de festa(nome),morada, preço, lugares, data, hora i, hora f

function ListarEvento() { //quando construindo os eventos colocar ArrayEventos[i] como id das radio boxes //se der....
    var x = document.getElementById("mySelect").value;
    var ArrayEventos=JSON.parse(localStorage.getItem("ArrayEventos"));
   console.log(ArrayEventos);

    for(var i=0; i<ArrayEventos.length;i=i+9)
    {
        if(x==ArrayEventos[i])
            {
            console.log(ArrayEventos[i]);
            console.log(ArrayEventos[i+1]);
            console.log(ArrayEventos[i+2]);
            console.log(ArrayEventos[i+3]);
            console.log(ArrayEventos[i+4]);
            console.log(ArrayEventos[i+5]);
            console.log(ArrayEventos[i+6]);
            console.log(ArrayEventos[i+7]);
            console.log(ArrayEventos[i+8]);
        }
    }

console.log(x);
 document.getElementById("listar").innerHTML = "cidade: " + x;

}


function guardarsimples(){
    var temp=[];

   var preco= document.querySelector('input[type=radio]:checked').id;
   var adulto = document.getElementById("adulto").value;
   var crianca = document.getElementById("crianca").value;
   var nome = document.getElementById("nome").value;
   var email= document.getElementById("email").value;
   var total=(adulto*preco)+(crianca*preco);
   var morada="";
    temp.push(nome,morada,email,total);//morada vazia para n dar conflit no checkout
    console.log(temp)
    localStorage.setItem("festa_temp",JSON.stringify(temp));
    
    window.location="checkout.html";

}



















function guardar(){///não uso
    if(localStorage.getItem("ArrayEventos")==null){
        var DadosCompra = [];                 
        localStorage.setItem("DadosCompra",JSON.stringify(DadosCompra));
    }

    var adultos = document.getElementById("adulto").value;
    var crianca = document.getElementById("crianca").value;
    var nome = document.getElementById("nome").value;
    var email= document.getElementById("email").value;
    var id_festa = document.getElementById("myRadio").value;//pedido do id da radio box

    var ArrayEventos = JSON.parse(localStorage.getItem("ArrayEventos"));///carrega os eventos
    var i = ArrayEventos.indexOf(id_festa);//vai buscar a possição do evento comprado

    var preco=ArrayEventos[i+4];//preço de bilhete adulto
    var preco_a=(preco*adultos);
    var preco_c=((preco/2)*crianca);
    var preco_f=(preco_a+preco_c);

    var DadosCompra=JSON.parse(localStorage.getItem("DadosCompra"));
    
    DadosCompra.push(nome,email,adultos,preco_a,crianca,preco_c,preco_f,id_festa);//ordem :nome, mail, nº adultos, preço dos bilhetes para adulto, nº criança, preço dos bilhetes, preço total da compra e 
    //id do evento para depois actualizar as vagas
    localStorage.setItem("DadosCompra",JSON.stringify(DadosCompra));//dados compra guardados para ser usados no check out

    window.location="checkout.html"

}
