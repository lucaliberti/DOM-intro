
//--- GLOBAL VARs
const input1=document.getElementById("input01")
const p_update=document.getElementById("p_update")
const p_change=document.getElementById("p_change")

// --- FUNCTIONs
function onInput(){
  let n=input1.value.length
  console.log(n)
  p_update.innerText=input1.value + " ( hai inserito " + n + " caratteri)"
}

function onChange(){
  p_change.innerText=input1.value
}




// --- MAIN

input1.addEventListener( 'input'  , onInput)
input1.addEventListener( 'change' , onChange)
