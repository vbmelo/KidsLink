if(localStorage.getItem("festa_paga")==null)
{
    festa_paga=[];
    localStorage.setItem("festa_paga",JSON.stringify("festa_paga"));
}


var dados=JSON.parse(localStorage.getItem("festa_temp"));


document.getElementById("nome").value = dados[0];
document.getElementById("morada").value = dados[1];
document.getElementById("email").value = dados[2];
document.getElementById("total").innerHTML = dados[3]+"€";
//console.log(dados[4]);

//nome,morada,mail,valor,id_festa
//estados para festas: sem orcamento,com orcamento,paga

function pagar(){
    var festa=JSON.parse(localStorage.getItem("festa"));
    var festa_or=JSON.parse(localStorage.getItem("festa_orcamentada"));
    var festa_paga=[];
    //actualizar arrays de festas
    for(var i=0; i<festa_or.length;i+=21){
        if(festa_or[i]==dados[4]){
            festa_or[i+19]="paga";
            localStorage.setItem("festa_orcamentada",JSON.stringify(festa_or));
            break;
        }        
    }
    for(var i=0; i<festa.length;i+=21){
        if(festa[i]==dados[4]){
            festa[i+19]="paga";
            localStorage.setItem("festa",JSON.stringify(festa));
            break;
        }        
    }

    for(var i=0; i<festa_or.length;i+=21){
        if(festa_or[i]==dados[4]){
            
            festa_paga.push(festa_or[i]);
            festa_paga.push(festa_or[i+1]);
            festa_paga.push(festa_or[i+2]);
            festa_paga.push(festa_or[i+3]);
            festa_paga.push(festa_or[i+4]);
            festa_paga.push(festa_or[i+5]);
            festa_paga.push(festa_or[i+6]);
            festa_paga.push(festa_or[i+7]);
            festa_paga.push(festa_or[i+8]);
            festa_paga.push(festa_or[i+9]);
            festa_paga.push(festa_or[i+10]);
            festa_paga.push(festa_or[i+11]);
            festa_paga.push(festa_or[i+12]);
            festa_paga.push(festa_or[i+13]);
            festa_paga.push(festa_or[i+14]);
            festa_paga.push(festa_or[i+15]);
            festa_paga.push(festa_or[i+16]);
            festa_paga.push(festa_or[i+17]);
            festa_paga.push(festa_or[i+18]);
            festa_paga.push(festa_or[i+19]="paga");//19 //estados para festas: sem orcamento,com orcamento,paga
            festa_paga.push(festa_or[i+20]);//20

            localStorage.setItem("festa_paga",JSON.stringify(festa_paga));//criar nova array para listar as festas que ja foram compradas nos perfis dos clientes e nos perfil dos organizadores

            break;
        }
    }
    console.log(festa_paga);
   
   window.location="index.html";
   alert("Obrigado por escolher a KidsLink!")
}