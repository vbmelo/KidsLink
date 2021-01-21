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
  var festa =JSON.parse(localStorage.getItem("festa"));
  var temp=0;

  for(var i=0; i<festa.length;i+=21){
    console.log(i)
    console.log(festa[i+17]==JSON.parse(localStorage.getItem("mail_l")));
    console.log(festa[i+19]);
    if(festa[i+17]==JSON.parse(localStorage.getItem("mail_l")) && festa[i+19]=="com orcamento"){
      temp++;
      $("#Table_Festas_Pendestes").show();
      //lista festa
    }
    
  }
  if(temp>0){return;}//retorna para poder mostar
  else{$("#Table_Festas_Pendestes").hide();}//esconde caso não haja festa com estado
  

  


}

//estados para festas: sem orcamento,com orcamento,paga