 
# Introduzione al DOM

## 01- Creazione della struttura
Includere del codice JS all'interno del documento
```
<script defer src="js/script.js"></script> 
```

### Esempi
  - Vedi [Esempio 12](Examples/10_Intro/12_includere_js_in_un_documento)


## 02- Inziare ad utilizzare JS
### Esempi Introduttivi
  - il metodo console.log()  [Esempio 13](Examples/10_Intro/13_alert)    <<<   //FIXME
  - Il metodo window.alert() [Esempio 13](Examples/10_Intro/13_alert)

  
  
## 03- Costruire un element mediante il linguaggio JS
const element=document.createElement("div")
let now= new Date()
element.innerText="Ciao Messina e Ciao al super Bauer: sono le ore " + now
element.style.background="gray"

document.body.appendChild(element)
console.log(window.document.body)

### Esempi  
  - Creazione di un elemento "div" [Esempio 21](Examples/20_creazione_elemento/21_crea_elemento)


 
## 04- Selectors
  - document.getElementById()
  - document.getElementsById()
  - document.getElementsByClassName()
  - document.querySelector()
  - document.querySelectorAll()

  
### Esempi 
Vedi
  - [Esempio 31](Examples/30_selector/31_getElementByID)
  - [Esempio 32](Examples/30_selector/32_getElementByClassName)

