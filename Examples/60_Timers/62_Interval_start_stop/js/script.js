
//--- GLOBAL VARs
const domBtnStart=document.getElementById("btnStart");
const domBtnStop=document.getElementById("btnStop");
const domCounter=document.getElementById("p_counter");
let counter=0;
let myInterval;      // Global Object

// --- FUNCTIONs
function startCounter(){
  myInterval=setInterval( conteggioFunc , 1000);
}

function stopCounter(){
  clearInterval(myInterval);
}

function conteggioFunc(){
  counter++
  domCounter.innerText=counter
}

 
// --- MAIN
domBtnStart.addEventListener( 'click' , startCounter)
domBtnStop.addEventListener(  'click' , stopCounter)
