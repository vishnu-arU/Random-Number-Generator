

document.getElementById("button").onclick =function(){
 let  Randmin =Number(document.getElementById("rnumbermin").value);

 let  Randmax =Number(document.getElementById("rnumbermax").value);
   
    randumnumber =Math.floor(Math.random()*(Randmax -Randmin + 1)+ Randmin);
    document.getElementById("number").textContent = randumnumber;

 }