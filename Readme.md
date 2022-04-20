 
# Introduzione al DOM

## 01- Creazione della struttura
Includere del codice JS all'interno del documento
```
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

### Esempi
  - Vedi [Esempio 12](Examples/10_Intro/12_includere_js_in_un_documento)


## 02- Inziare ad utilizzare JS
### Esempi Introduttivi
  - il metodo console.log()  [Esempio 14](Examples/10_Intro/14_console_log)    <<<   //FIXME
  - Il metodo window.alert() [Esempio 13](Examples/10_Intro/13_alert)

  
  
## 03- Costruire un element mediante il linguaggio JS

```javascript
  const element=document.createElement("div")
  element.innerText="Ciao sono una DIV" 
  element.style.background="gray"

  document.body.appendChild(element)
  console.log(window.document.body)
```

### Esempi  
  - Creazione di un elemento "div" [Esempio 21](Examples/20_creazione_elemento/21_crea_elemento)


 
## 04- Selectors
Principali Selectors
  - document.getElementById()
  - document.getElementsByClassName()
  - document.querySelector()
  - document.querySelectorAll()

  
### Esempi 

```javascript
  
```

## 05- Listeners ed Eventi
Principali Selectors
  - document.getElementById()
  - document.getElementsByClassName()
  - document.querySelector()
  - document.querySelectorAll()

  
### Esempi
 - Creazione di un elemento "div" [Esempio 21](Examples/20_creazione_elemento/21_crea_elemento)
  
