
// --- GLOBAL VARs
const btn=document.getElementById("bottone")
let contaClick=0       // globale


// --- FUNCTIONs
function stampaMessaggio(){
  console.log("Hai cliccato " + contaClick + " volte" )
  contaClick++
}

let stampaMessaggio2  = () => { 
  console.log("Funzione stampaMessaggio2 : hai cliccato")
}


// --- MAIN
console.log(btn)

// modo1 aggiunta di un listener 
btn.addEventListener( 'click' , stampaMessaggio  )

// modo2 aggiunta di un listener 
// btn.addEventListener( 'click' , stampaMessaggio2  )

// modo3 aggiunta di un listener 
// btn.addEventListener( 'click' , () => { 
//  console.log("Funzione stampaMessaggio2 : hai cliccato")
// }  )




/*
btn.addEventListener( 'click' , () => { 
    console.log("clicked")
  })
*/