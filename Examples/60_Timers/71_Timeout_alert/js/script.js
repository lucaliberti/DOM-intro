
//--- GLOBAL VARs
const domBtn=document.getElementById("btn")
const domMessage=document.getElementById("p_messaggio")
let counter=0  // Global VARs


// --- FUNCTIONs

function funcTimeout(){
  setTimeout(funcAlert, 3500)
  domMessage.innerText="Timeout attivato"
}
 
function funcAlert(){
  alert('Hello');
  domMessage.innerText="Timeout disattivato"
}

// --- MAIN
domBtn.addEventListener( 'click'  , funcTimeout)



