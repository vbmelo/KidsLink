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
    

    if(document.getElementById("a_f").checked){
      var  a_f="sim";
    }
    else{
        var a_f="nao";
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

      var mail = localStorage.getItem("mail");
      var id_org=12;
      var estado=0;
      var orcamento=0;
    festa.push(nome);
    festa.push(data);
    festa.push(morada);
    festa.push(hora_i);
    festa.push(hora_f);
    festa.push(tema);
    festa.push(espaco);
    festa.push(pessoa);
    festa.push(a_f);
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
    console.log(festa);
}


