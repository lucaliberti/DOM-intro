const element=document.createElement("div")
let now= new Date()
element.innerText="Ciao Messina e Ciao al super Bauer: sono le ore " + now
element.style.background="gray"

document.body.appendChild(element)
console.log(window.document.body)
