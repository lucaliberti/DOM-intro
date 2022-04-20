
//--- GLOBAL VARs
const btn=document.getElementById("bottone")
let   btnMargin=10


// --- FUNCTIONs
function onMoveButton(){
  btnMargin=btnMargin+50;
  btn.style.marginLeft=btnMargin+ "px"  
  btn.style.marginTop=btnMargin+ "px"  
}

// --- MAIN
console.log(btn)
btn.addEventListener( 'mouseover' , onMoveButton)