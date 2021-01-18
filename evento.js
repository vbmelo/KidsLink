//regiao, Tipo de festa(nome),morada, preço, lugares, data, hora i, hora f
if(localStorage.getItem("ArrayEventos")==null){
    var evento = ["Aveiro","Festa Halloween","Rua do Brasil Mº44","15","30","31/10/2021","17:00","21:00","Aveiro","Festa Natal","Rua do Milhafre Mº12","20","60","25/12/2021","15:00","19:00","Aveiro","Festa Páscoa","Rua da Paz Mº59","10","20","4/4/2021","15:00","19:00","Lisboa","Festa de Halloween","Rua do Probe Mº74","15","30","31/10/2021","17:00","21:00","Lisboa","Festa de Natal","Rua do Tomas Cabral Mº19","20","60","25/12/2021","15:00","19:00","Lisboa","Festa de Páscoa","Rua da Sossego Mº99","10","20","4/4/2021","15:00","19:00"];                 
    localStorage.setItem("ArrayEventos",JSON.stringify(evento));
}

//info das festas no array
//"Aveiro","Festa Halloween","Rua do Brasil Mº44","15","30","31/10/2021","17:00","21:00",
//"Aveiro","Festa Natal","Rua do Milhafre Mº12","20","60","25/12/2021","15:00","19:00",
//"Aveiro","Festa Páscoa","Rua da Paz Mº59","10","20","4/4/2021","15:00","19:00",

//"Lisboa","Festa de Halloween","Rua do Probe Mº74","15","30","31/10/2021","17:00","21:00",
//"Lisboa","Festa de Natal","Rua do Tomas Cabral Mº19","20","60","25/12/2021","15:00","19:00",
//"Lisboa","Festa de Páscoa","Rua da Sossego Mº99","10","20","4/4/2021","15:00","19:00"

function ListarEvento() {
    var x = document.getElementById("mySelect").value;
    var ArrayEventos=JSON.parse(localStorage.getItem("ArrayEventos"));
   console.log(ArrayEventos);

    for(var i=0; i<ArrayEventos.length;i=i+8)
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
        }
    }




}0
+8

