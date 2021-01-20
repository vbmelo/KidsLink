if(localStorage.getItem("festa")==null){
  var festa=[];
  localStorage.setItem("festa",JSON.stringify(festa));
  var conta=1;
  localStorage.setItem("conta",JSON.stringify(conta));

}



function guardar(){
  var festa =[];

  var conta = JSON.parse(localStorage.getItem("conta"));

  var nome = document.getElementById("nome").value;
  var data = document.getElementById("data").value;
  var morada = document.getElementById("morada").value;
  var hora_i = document.getElementById("hora_i").value;
  var hora_f = document.getElementById("hora_f").value;
  var tema = document.getElementById("tema").value;
  var espaco = document.getElementById("espaco").value;
  var pessoa = document.getElementById("pessoa").value;
  alert("Festa Guardada");
  //extrair os valores das checkboxes
  if(document.getElementById("pi").checked){
    var  pi="Pintura facial";
  }
  else{
      var pi="";
  }

  if(document.getElementById("mu").checked){
      var  mu="Musica";
    }
    else{
        var mu="";
    }

  if(document.getElementById("ma").checked){
      var  ma="Magico";
    }
    else{
        var ma="";
    }

    if(document.getElementById("pa").checked){
      var  pa="Palhaço";
    }
    else{
        var pa="";
    }

    if(document.getElementById("c_s").checked){
      var  c_s="Castelo Saltitante";
    }
    else{
        var c_s="";
    }

    if(document.getElementById("es").checked){
      var  es="Escorrega";
    }
    else{
        var es="";
    }

    if(document.getElementById("co").checked){
      var  co="Convites";
    }
    else{
        var co="";
    }

    if(document.getElementById("ca").checked){
      var  ca="Catering";
    }
    else{
        var ca="";
    }

    
  var festa =JSON.parse(localStorage.getItem("festa"));
  var mail = JSON.parse(localStorage.getItem("mail_l"));

  var id_org=2;
  var estado=0;
  var orcamento=0;
  console.log(typeof festa);
  festa.push(conta);
  festa.push(nome);
  festa.push(morada);
  festa.push(data);
  festa.push(hora_i);
  festa.push(hora_f);
  festa.push(pessoa);
  festa.push(tema);
  festa.push(espaco);
  festa.push(pi);
  festa.push(mu);
  festa.push(ma);
  festa.push(pa);
  festa.push(c_s);
  festa.push(es);
  festa.push(co);
  festa.push(ca);
  festa.push(mail);
  festa.push(id_org);
  festa.push(estado);
  festa.push(orcamento);
  conta++;
  localStorage.setItem("conta",JSON.stringify(conta));

  //array dos 0-21
  localStorage.setItem("festa",JSON.stringify(festa));
  
  window.location = "index.html"; // Redireciona
}

function enviarOrcamento(elem) {
  var orcamentoName = $('[name="orcamentoBox"]').val();
  var orcamentoID  = $('[name="orcamentoBox"]').attr("id");
  console.log("texto do Orcamento = "+  orcamentoName);
  console.log("id da box = " + orcamentoID);
}

var contadorRow = 0;
function listarFesta() {
  $("#Table_Festas_Pendestes").show();

  var ArrayFesta = JSON.parse(localStorage.getItem("festa"));
  console.log(ArrayFesta);
  console.log("Length do array" + ArrayFesta.length);
    if(ArrayFesta.length>=20){
        var i =  0; 
        $.each(ArrayFesta, function(){
          if (i  >= ArrayFesta.length) {

              return;
              }
        $("#tbody_Lista").append(
        <tr id="Tr_Lista"><br />
        <th scope="row">${contadorRow}</th><br />
        <td id="Nome_Lista">${ArrayFesta[i+1]}</td><br />
        <td id="Morada_Lista">${ArrayFesta[i+2]}</td><br />
        <td id="Data_Lista">${ArrayFesta[i+3]}</td><br />
        <td id="Hora_inicio_Lista">${ArrayFesta[i+4]}</td><br />
        <td id="Hora_fim_Lista">${ArrayFesta[i+5]}</td><br />
        <td id="Pessoas_Lista">${ArrayFesta[i+6]}</td><br />
        <td id="Tema_Lista">${ArrayFesta[i+7]}</td><br />
        <td id="Espaço_Lista">${ArrayFesta[i+8]}</td><br />
        <td id="Ser_Lista">
          <ul id="Ser_ul">
            <li>${ArrayFesta[i+9]}</li>
            <li>${ArrayFesta[i+10]}</li>
            <li>${ArrayFesta[i+11]}</li>
            <li>${ArrayFesta[i+12]}</li>
            <li>${ArrayFesta[i+13]}</li>
            <li>${ArrayFesta[i+14]}</li>
            <li>${ArrayFesta[i+15]}</li>
            <li>${ArrayFesta[i+16]}</li>
          </ul>
        </td><br />
        <td id="Orcamento_Lista">
          <textarea id='${conta}' name="orcamentoBox" rows="1" cols="10" placeholder="Orcamento" style="color: black;"></textarea><br />
          <button type="button" class="button btn-primary" onclick="enviarOrcamento(this)">Enviar</button>
        </td>
        </tr>
        );
        $('[name="orcamentoBox"]').attr("id");// onde ta o contador row, colocar o id identificador da festa, para ser o id da textbox

        contadorRow +=1;
        i += 21;
          });
      }

  }

function enviarOrcamento(){

 // var x=document.getElementById("1").value;
  //console.log(x);


}


