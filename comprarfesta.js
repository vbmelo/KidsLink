if(localStorage.getItem("festa")==null){
    var festa=[];
    localStorage.setItem("festa",JSON.stringify(festa));

}



function guardar(){
    var festa =[];
    var nome = document.getElementById("nome").value;
    var data = document.getElementById("data").value;
    var morada = document.getElementById("morada").value;
    var hora_i = document.getElementById("hora_i").value;
    var hora_f = document.getElementById("hora_f").value;
    var tema = document.getElementById("tema").value;
    var espaco = document.getElementById("espaco").value;
    var pessoa = document.getElementById("pessoa").value;
    
    //extrair os valores das checkboxes
    if(document.getElementById("pi").checked){
      var  pi="sim";
    }
    else{
        var pi="nao";
    }

    if(document.getElementById("mu").checked){
        var  mu="sim";
      }
      else{
          var mu="nao";
      }
     
    if(document.getElementById("ma").checked){
        var  ma="sim";
      }
      else{
          var ma="nao";
      }

      if(document.getElementById("pa").checked){
        var  pa="sim";
      }
      else{
          var pa="nao";
      }

      if(document.getElementById("c_s").checked){
        var  c_s="sim";
      }
      else{
          var c_s="nao";
      }

      if(document.getElementById("es").checked){
        var  es="sim";
      }
      else{
          var es="nao";
      }

      if(document.getElementById("co").checked){
        var  co="sim";
      }
      else{
          var co="nao";
      }

      if(document.getElementById("ca").checked){
        var  ca="sim";
      }
      else{
          var ca="nao";
      }
 
      
    var festa =JSON.parse(localStorage.getItem("festa"));
    var mail = JSON.parse(localStorage.getItem("mail_l"));

    var id_org=2;
    var estado=0;
    var orcamento=0;
    console.log(typeof festa);
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
    //array dos 0-19
    localStorage.setItem("festa",JSON.stringify(festa));
    //para apagar é so a maneira para ler o array das festas/testar
    for (var i = 0; i < festa.length; i=i+20){
        console.log("nome");
        console.log(festa[i]);

        console.log("data");
        console.log(festa[i+1]);

        console.log("morada");
        console.log(festa[i+2]);

        console.log("hora inicio");
        console.log(festa[i+3]);

        console.log("hora fim");
        console.log(festa[i+4]);

        console.log("tema");
        console.log(festa[i+5]);

        console.log("espaço");
        console.log(festa[i+6]);

        console.log("pessoas");
        console.log(festa[i+7]);

        console.log("pintor");
        console.log(festa[i+8]);

        console.log("musico");
        console.log(festa[i+9]);

        console.log("magico");
        console.log(festa[i+10]);

        console.log("palhaço");
        console.log(festa[i+11]);

        console.log("castelo saltitante");
        console.log(festa[i+12]);

        console.log("escorrega");
        console.log(festa[i+13]);

        console.log("convites");
        console.log(festa[i+14]);

        console.log("catering");
        console.log(festa[i+15]);

        console.log("mail do cliente");
        console.log(festa[i+16]);

        console.log("id do organizador");
        console.log(festa[i+17]);

        console.log("estado 0 é sem orçamento 1 com orçamento");//se tiver 0 pararece no perfil do organizador se for 1 aparece na pagina das festas a organizar e aparece a espera de pagamento para o cliente
        console.log(festa[i+18]);

        console.log("valor do orçamento");//o arganizador depois atribiu um valor
        console.log(festa[i+19]);
        console.log("/////");

        
    }
  }


var contadorRow = 0;
function listarFesta() {
    $("#Table_Festas_Pendestes").show();
    
    var ArrayFesta =JSON.parse(localStorage.getItem("festa"));
    console.log(ArrayFesta);
    console.log("Length do array" + ArrayFesta.length);
      if(ArrayFesta.length>=19){
          var i =  0;
            
           $.each(ArrayFesta, function(){
            if (i  >= ArrayFesta.length) {
                console.log(i);
                console.log("brakpoint??");
                return;
                }
          $("#tbody_Lista").append(`
           <tr id="Tr_Lista"><br />
          <th scope="row">${contadorRow}</th><br />
          <td id="Nome_Lista">${ArrayFesta[i]}</td><br />
          <td id="Morada_Lista">${ArrayFesta[i+1]}</td><br />
          <td id="Data_Lista">${ArrayFesta[i+2]}</td><br />
          <td id="Hora_inicio_Lista">${ArrayFesta[i+3]}</td><br />
          <td id="Hora_fim_Lista">${ArrayFesta[i+4]}</td><br />
          <td id="Pessoas_Lista">${ArrayFesta[i+5]}</td><br />
          <td id="Espaço_Lista">${ArrayFesta[i+6]}</td><br />
          <td id="ser_Lista">${ArrayFesta[i+7]}</td><br />
                         
          </tr>
          `);
          contadorRow +=1;
          i += 19;
                
                
            });
        }
       
    } 
//<td id="orcamento_Lista"> <input type="text" name="orcamento" id="orcamento" placeholder=""/> </td><br /> tentativa de por textbox na listagem para dfefenir orçamento


