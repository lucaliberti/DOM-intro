
//--- GLOBAL VARs
const immagine=document.getElementById("bulbImg")
const btn=document.getElementById("bottoneOn")
const myBody=document.querySelector("body")
let   lampIsOn=false

// --- FUNCTIONs
function lampSwitch(){
  if ( lampIsOn == false) {

    //lampada è spenta --> la dobbiamo accendere
    immagine.src="img/bulbon.png"
    myBody.style.backgroundColor="rgb(150, 204, 235)"
    btn.textContent="Spegnimi"
    lampIsOn= true
  } else {
    //lampada è accesa --> la dobbiamo spegnere
    immagine.src="img/bulboff.png"
    myBody.style.backgroundColor="darkgrey"
    btn.textContent="Accendimi"
    lampIsOn=false
  }
 
}

// --- MAIN
console.log(btn)
btn.addEventListener( 'click' , lampSwitch)