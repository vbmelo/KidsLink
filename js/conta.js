if(localStorage.getItem("festa_temp")==null)
{
  var festa_temp=[];
  localStorage.setItem("festa_temp",JSON.stringify(festa_temp));
}



function update(){

document.querySelector("#change").textContent=JSON.parse(localStorage.getItem("mail_l"));
}

document.getElementById("defaultOpen").click();

function display(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";




 

  
}
function listar(){
  var ArrayFesta =JSON.parse(localStorage.getItem("festa_orcamentada"));
  var temp=0;

  for(var i=0; i<ArrayFesta.length;i+=21){
    console.log(i)
    console.log(ArrayFesta[i+17]==JSON.parse(localStorage.getItem("mail_l")));
    console.log(ArrayFesta[i+19]);
    if(ArrayFesta[i+17]==JSON.parse(localStorage.getItem("mail_l")) && ArrayFesta[i+19]=="com orcamento"){
      temp++;
      $("#Table_Festas_Pendestes").show();
      //lista festa

      var ArrayFesta = JSON.parse(localStorage.getItem("festa"));
   
    if (ArrayFesta.length >= 20) {
        var i = 0;
        $.each(ArrayFesta, function () {
            if (i >= ArrayFesta.length) {

                return;
            }

            if(ArrayFesta[i+19]=="com orcamento" )
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
              <td id="orcamento">${ArrayFesta[i + 20]}</td><br />
              <br /><td id="Orcamento_Lista">
                  <button type="button" class="button btn-primary" onClick="pagar('${ArrayFesta[i]}')">Pagar</button></td></tr>`);
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
    
  }
  if(temp>0){return;}//retorna para poder mostar
  else{$("#Table_Festas_Pendestes").hide();}//esconde caso não haja festa com estado
  

  


}
function pagar(id){

  var id_festa=id;
  console.log(id_festa);
  festa_or=JSON.parse(localStorage.getItem("festa_orcamentada"));

  for(var i=0; i<festa_or.length;i+=21){
    if(festa_or[i]==id_festa){
      nome=festa_or[i+1]; 
      morada=festa_or[i+2];
      email=festa_or[i+17];
      valor=festa_or[i+20];
      console.log("update?");
      var info=[];
      info.push(nome);
      info.push(morada);
      info.push(email);
      info.push(valor);
      info.push(id_festa);

      console.log(info);

      localStorage.setItem("festa_temp",JSON.stringify(info));
      break;
    }
   

 



  } 
  
  window.location="checkout.html";
}
//estados para festas: sem orcamento,com orcamento,paga