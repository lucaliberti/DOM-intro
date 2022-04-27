
 
# Introduzione al DOM ed alla suam Manipolazione mediante il linguaggio Javascript

## 00- Indice
- [01- Creazione della struttura](#01--creazione-della-struttura)
  * [Esempi](#esempi)
- [02- Inziare ad utilizzare JS](#02--inziare-ad-utilizzare-js)
  * [Esempi Introduttivi](#esempi-introduttivi)
- [03- Costruire un element mediante il linguaggio JS](#03--costruire-un-element-mediante-il-linguaggio-js)
  * [Esempi](#esempi-1)
- [04- Selectors](#04--selectors)
  * [Esempi](#esempi-2)
- [05- Listeners ed Eventi](#05--listeners-ed-eventi)
  * [Esempi](#esempi-3)
  * [Modi Alternativi per definire un Listener](#modi-alternativi-per-definire-un-listener)
- [06- Eseguire funzioni ad intervalli regolari o in un tempo futuro](#06--eseguire-funzioni-ad-intervalli-regolari-o-in-un-tempo-futuro)
  * [Il metodo setInterval()](#il-metodo-setinterval--)
  * [Esempi](#esempi-4)
  * [Il metodo setTimeout()](#il-metodo-settimeout--)
  * [Esempi](#esempi-5)


## 01- Creazione della struttura
Includere del codice JS all'interno del documento
```HTML
    <script defer src="js/script.js"></script> 
```
    
### Esempi
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <script defer src="js/script.js"></script> 
   
</head>
<body>
</body>
</html>
```

Esempi completi:
  - Includere codice JS in un documento [Esempio 12](Examples/10_Intro/12_includere_js_in_un_documento)


## 02- Inziare ad utilizzare JS
### Esempi Introduttivi
  - il metodo console.log()  [Esempio 14](Examples/10_Intro/14_console_log)   
  - Il metodo window.alert() [Esempio 13](Examples/10_Intro/13_alert)

  
  
## 03- Costruire un element mediante il linguaggio JS

```javascript
  // Creo l'elemento
  const element=document.createElement("div")
  element.innerText="Ciao sono una DIV" 
  element.style.background="gray"

  // Inserisci l'elemento nel documento
  document.body.appendChild(element)
  console.log(window.document.body)
```

### Esempi  
  - Creazione di un elemento "div" utilizzando codice JS [Esempio 21](Examples/20_creazione_elemento/21_crea_elemento)


 
## 04- Selectors
Principali Selectors
  - document.getElementById()
  - document.getElementsByClassName()
  - document.querySelector()
  - document.querySelectorAll()

  
### Esempi 
  - Impiego del metodo "document.getElementById()"  [Esempio 31](Examples/30_selector/31_getElementByID)
  - Impiego del metodo "document.getElementsByClassName()"  [Esempio 32](Examples/30_selector/32_getElementByClassName)


## 05- Listeners ed Eventi
Il modo più semplice per aggiungere un listener è il seguente

```javascript

// --- GLOBAL VARs
const btn=document.getElementById("bottone")
let contaClick=0       // globale

// --- FUNCTIONs
function stampaMessaggio(){
  console.log("Hai cliccato " + contaClick + " volte" )
  contaClick++
}


// --- MAIN
// modo1 aggiunta di un listener utilizzando una funzione definita in modo classico
btn.addEventListener( 'click' , stampaMessaggio  )
```

Riferimenti relativa agli eventi predefiniti di un browser [Documentazione](https://it.javascript.info/introduction-browser-events)

  
### Esempi
 - Creazione di un listener [Esempio 41](Examples/40_listeners/41_creazione_listener)
 - Bottone alert [Esempio 42](Examples/40_listeners/42_bottone_alert)
 - Accensione lampadina 1 [Esempio 43.01](Examples/40_listeners/43.01_lampadina_simple)
 - Accensione lampadina 2 [Esempio 43.02](Examples/40_listeners/43.02_lampadinaOnOff_Button)
 - Accenzsione lampadina 3 [Esempio 43.03](Examples/40_listeners/43.03_lampadinaOnOff)
 - Bottone che si sposta [Esempio 44](Examples/40_listeners/44.Moving_Button)
 - Casella di testo [Esempio 45](Examples/40_listeners/45.01_Input/)
   Per ulteriori informazioni riguardo gli eventi disponibili su una una casella di testo 
   vedi [qui](https://it.javascript.info/events-change-input)

  
### Modi Alternativi per definire un Listener  
Esistono i seguenti modi alternativi:

```javascript

// --- GLOBAL VARs
const btn=document.getElementById("bottone")
let contaClick=0       // globale

// --- FUNCTIONs
let stampaMessaggio2  = () => {
  console.log("Funzione stampaMessaggio2 : hai cliccato")
}

// --- MAIN
// modo2 aggiunta di un listener utizzando una arrow function
 btn.addEventListener( 'click' , stampaMessaggio2  )

// modo3 aggiunta di un listener utilizzanto una arrow anonymous function
btn.addEventListener( 'click' , () => {
  console.log("Anonymous function : hai cliccato")
})

```
 
  
## 06- Eseguire funzioni ad intervalli regolari o in un tempo futuro

### Il metodo setInterval()
La funzione "setInterval()" permette di eseguire una funzione ad intervalli regolari. 

```javascript
  const myInterval=setInterval( miaFunzione , 1000);
```
L'intervallo temporale è espresso in millisecondi.

Per eliminare il timer
```javascript
   clearInterval(myInterval);
```

> Riferimenti [Documentazione](https://it.javascript.info/settimeout-setinterval)

### Esempi
 - Utilizzo basilare metodo setInterval() 
   [Esempio 61](Examples/60_Timers/61_Interval_start)
 - Come disattivare un timer [Esempio 62](Examples/60_Timers/62_Interval_start_stop)


### Il metodo setTimeout()
La funzione "setTimeout()" permette di eseguire una funzione una sola volta nel futuro 

```javascript
   setTimeout( miaFunzione , 1000);
```
Il valore numerico è espresso in millisecondi.

Riferimenti [Documentazione](https://it.javascript.info/settimeout-setinterval)

### Esempi
 - Utilizzo basilare del metodo setTimeout() 
   [Esempio 71](Examples/60_Timers/71_Timeout_alert)

