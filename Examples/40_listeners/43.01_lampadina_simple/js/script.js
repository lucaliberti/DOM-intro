
//--- GLOBAL VARs
const immagine=document.getElementById("bulbImg")
const btn=document.getElementById("bottoneOn")


// --- FUNCTIONs
function lampSwitch(){
  immagine.src="img/bulbon.png"
}

// --- MAIN
console.log(immagine)
btn.addEventListener( 'click' , lampSwitch)