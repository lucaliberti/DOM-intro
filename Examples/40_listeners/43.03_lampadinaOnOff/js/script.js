
//--- GLOBAL VARs
const immagine=document.getElementById("bulbImg")
const myBody=document.querySelector("body")
let   lampIsOn=false

// --- FUNCTIONs
function lampSwitch(){
  if ( lampIsOn == false) {

    //lampada è spenta --> la dobbiamo accendere
    immagine.src="img/bulbon.png"
    myBody.style.backgroundColor="rgb(150, 204, 235)"
    lampIsOn= true
  } else {
    //lampada è accesa --> la dobbiamo spegnere
    immagine.src="img/bulboff.png"
    myBody.style.backgroundColor="darkgrey"
    lampIsOn=false
  }
}


function lampSwitchOn(){
    //lampada è spenta --> la dobbiamo accendere
    immagine.src="img/bulbon.png"
    //immagine.style.marginLeft="100px"
    myBody.style.backgroundColor="rgb(150, 204, 235)"
    lampIsOn= true
    console.log("la accendo")
}

function lampSwitchOff(){
    //lampada è accesa --> la dobbiamo spegnere
    immagine.src="img/bulboff.png"
    //immagine.style.marginLeft="10px"
    myBody.style.backgroundColor="darkgrey"
    lampIsOn=false
    console.log("la spengo")
}

// --- MAIN
//console.log(btn)
//immagine.addEventListener( 'click' , lampSwitch)
immagine.addEventListener( 'mouseenter' , lampSwitchOn)
immagine.addEventListener( 'mouseleave' , lampSwitchOff)