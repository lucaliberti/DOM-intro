
//--- GLOBAL VARs
const domBtn=document.getElementById("btn")
const domCounter=document.getElementById("p_counter")
let counter=0  // Global Var


// --- FUNCTIONs
function startCounter(){
  setInterval( conteggioFunc , 1000);
}

function conteggioFunc(){
  counter++
  domCounter.innerText=counter
}

 
// --- MAIN
domBtn.addEventListener( 'click'  , startCounter)
