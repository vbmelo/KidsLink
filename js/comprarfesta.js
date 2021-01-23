if (localStorage.getItem("festa") == null) {
    var festa = [];
    localStorage.setItem("festa", JSON.stringify(festa));
    var id_festa = 1;
    localStorage.setItem("id_festa", JSON.stringify(id_festa));

}



function guardar() {
    var festa = [];

    var id_festa = JSON.parse(localStorage.getItem("id_festa"));

    var nome = document.getElementById("nome").value;
    var data = document.getElementById("data").value;
    var morada = document.getElementById("morada").value;
    var hora_i = document.getElementById("hora_i").value;
    var hora_f = document.getElementById("hora_f").value;
    var tema = document.getElementById("tema").value;
    var espaco = document.getElementById("espaco").value;
    var pessoa = document.getElementById("pessoa").value;


    ///mudar o texte do espaço
    //if(tema=="")



    //extrair os valores das checkboxes
    if (document.getElementById("pi").checked) {
        var pi = "Pintura facial";
    }
    else {
        var pi = "";
    }

    if (document.getElementById("mu").checked) {
        var mu = "Musica";
    }
    else {
        var mu = "";
    }

    if (document.getElementById("ma").checked) {
        var ma = "Magico";
    }
    else {
        var ma = "";
    }

    if (document.getElementById("pa").checked) {
        var pa = "Palhaço";
    }
    else {
        var pa = "";
    }

    if (document.getElementById("c_s").checked) {
        var c_s = "Castelo Saltitante";
    }
    else {
        var c_s = "";
    }

    if (document.getElementById("es").checked) {
        var es = "Escorrega";
    }
    else {
        var es = "";
    }

    if (document.getElementById("co").checked) {
        var co = "Convites";
    }
    else {
        var co = "";
    }

    if (document.getElementById("ca").checked) {
        var ca = "Catering";
    }
    else {
        var ca = "";
    }


    var festa = JSON.parse(localStorage.getItem("festa"));
    var mail = JSON.parse(localStorage.getItem("mail_l"));

    var id_org = 2;
    var estado ="sem orcamento";
    var orcamento = 0;
    festa.push(id_festa);
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
    festa.push(mail);//17
    festa.push(id_org);//18
    festa.push(estado);//19 //estados para festas: sem orcamento,com orcamento,paga
    festa.push(orcamento);//20
    id_festa++;
    localStorage.setItem("id_festa", JSON.stringify(id_festa));

    //array dos 0-21
    localStorage.setItem("festa", JSON.stringify(festa));
    window.location = "index.html"; // Redireciona
}

var contadorRow = 0;
function listarFesta() {
    $("#Table_Festas_Pendestes").show();

    var ArrayFesta = JSON.parse(localStorage.getItem("festa"));
    console.log(ArrayFesta);
    if (ArrayFesta.length >= 20) {
        var i = 0;
        $.each(ArrayFesta, function () {
            if (i >= ArrayFesta.length) {

                return;
            }

            if(ArrayFesta[i+19]=="sem orcamento" )//não da print
            {
             
                $("#tbody_Lista").append(`
              <tr id="Tr_Lista"><br />
              <th scope="row">${contadorRow}</th><br />
              <td id="Nome_Lista">${ArrayFesta[i + 1]}</td><br />
              <td id="Morada_Lista">${ArrayFesta[i + 2]}</td><br />
              <td id="Data_Lista">${ArrayFesta[i + 3]}</td><br />
              <td id="Hora_inicio_Lista">${ArrayFesta[i + 4]}</td><br />
              <td id="Hora_fim_Lista">${ArrayFesta[i + 5]}</td><br />
              <td id="Pessoas_Lista">${ArrayFesta[i + 6]}</td><br />
              <td id="Tema_Lista">${ArrayFesta[i + 7]}</td><br />
              <td id="Espaço_Lista">${ArrayFesta[i + 8]}</td><br />
              <td id="Ser_Lista"><ul id="l${contadorRow}"></ul></td><br />
              <td id="Orcamento_Lista"><textarea id='${ArrayFesta[i]}' name="orcamentoBox" rows="1" cols="10" placeholder="Orcamento" style="color: black;"></textarea><br />
                  <button type="button" class="button btn-primary" onClick="enviarOrcamento('${ArrayFesta[i]}')">Enviar</button></td></tr>`);
                  if (ArrayFesta[i + 9] != "") { $(`#l${contadorRow}`).append("<li>Pintor Facial</li>"); }
                  if (ArrayFesta[i + 10] != "") { $(`#l${contadorRow}`).append('<li>Musica</li>'); }
                  if (ArrayFesta[i + 11] != "") { $(`#l${contadorRow}`).append('<li>Magico</li>'); }
                  if (ArrayFesta[i + 12] != "") { $(`#l${contadorRow}`).append('<li>Palhaço</li>'); }
                  if (ArrayFesta[i + 13] != "") { $(`#l${contadorRow}`).append('<li>Castelo Saltitante</li>'); }
                  if (ArrayFesta[i + 14] != "") { $(`#l${contadorRow}`).append('<li>Escorrega</li>'); }
                  if (ArrayFesta[i + 15] != "") { $(`#l${contadorRow}`).append('<li>Convites</li>'); }
                  if (ArrayFesta[i + 16] != "") { $(`#l${contadorRow}`).append('<li>Catering</li>'); }
                  $('[name="orcamentoBox"]').attr("id");// onde ta o contador row, colocar o id identificador da festa, para ser o id da textbox

              contadorRow += 1;
            }
          i += 21;
        });
    }

}

function enviarOrcamento(id) {

  var id_festa=id;
  console.log(id_festa);
  var orcamento=document.getElementById(id).value;
  console.log(orcamento);
  var festa=JSON.parse(localStorage.getItem("festa"));
  console.log(festa);
  //atualizar estado da festa
  console.log("1");
  for(var i=0; i<festa.length;i+=21){
    if(festa[i]==id_festa){
      festa[i+19]="com orcamento"; 
      festa[i+20]=orcamento;
   
      break;
    }
    

  }
  window.location="organizador.html";
}

