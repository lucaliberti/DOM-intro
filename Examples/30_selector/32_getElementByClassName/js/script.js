

const elementsClass=document.getElementsByClassName("div-class")
//console.log(elementsClass)

// lo trasformo la variabile  in un array
const elements_array=Array.from( elementsClass )  

for ( let i=0 ; i<elements_array.length ;i++ ){
    //console.log("Elemento con indice " + i )
    //console.log( elements_array[i])
    //elements_array[i].style.color="purple"; 

    let red_perc=Math.random()*255
    let green_perc=Math.random()*255 
    let blue_perc=Math.random()*255

    red_perc=Math.trunc(red_perc)
    blue_perc=Math.trunc(blue_perc)
    green_perc=Math.trunc(green_perc)

    if (red_perc > 250 || blue_perc >250 || green_perc> 250 ) {
      console.log("forzo il colore")
      red_perc=10
      blue_perc=10
      green_perc=20
    }
    console.log (   "rgb(" +  red_perc + "," + green_perc + "," +  blue_perc + ")"   )
    elements_array[i].style.color="rgb(" +  red_perc + "," + green_perc + "," +  blue_perc + ")" 
}

const body=document.querySelector("body")
body.style.background="white"



function lamiaPrimaFunzione(){
    console.assert.log("ciao sono nata :)")
    let pippo="Te best"

    function lamiaSecondaFunzione(){
        let classe3d="Te best"
    }

    lamiaSecondaFunzione()
}

