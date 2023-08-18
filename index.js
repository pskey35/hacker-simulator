const padre = document.querySelector(".padre");
const texto = document.querySelector(".texto");
const container2 = document.querySelector(".container2");
const centera = document.querySelector(".center2");
const menu = document.querySelector(".menu");
const textarea = document.querySelector(".textareaR");
const text = document.querySelector(".ventana2 .text");
const input = document.querySelector(".input");

const inputTexto = document.querySelector("#inputTexto");
//----------------------------------------------------------------------
//------------VENTANA DOG-----------------
/*text.onclick = () => {
  input.focus();
  alert("Hola")
};
*/
text.addEventListener("click",e=>{
  input.focus();
})

//load loading
const container = document.querySelector(".container");
const icono = document.querySelector(".icono");

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const windo = document.querySelector(".window");


//esto no es un loading como tal, pero se ve mas piola asi xd
setTimeout(() => {
  windo.style.opacity = "0";
}, 1600);

setTimeout(() => {
  windo.style.display = "none";
}, 2650);

/*
        estos no sirven lo remplaze por toggle xd
        function abajo() {
            item1.classList.add("abajo")
            item2.classList.add("arriba")
            item3.classList.add("arriba")
        }

        function arriba() {
            item1.classList.add("arriba")
            item2.classList.add("abajo")
            item3.classList.add("abajo")
        }
*/
function iconoToggle() {
  item1.classList.toggle("abajo");
  item2.classList.toggle("arriba");
  item3.classList.toggle("arriba");
}

icono.addEventListener("click", (e) => {
  iconoToggle();
});



/*----------------------VENTANA------------*/

/*
window.onload = () =>{*/
setTimeout((e) => {
  padre.classList.add("padre2");
  texto.style.fontSize = "16px";
}, 3000);

setTimeout(() => {
  text.style.display = "block";
}, 4000);

/*}*/

//add event listener no funcion en elemntos con posicion absoluta LOL
//https://stackoverflow.com/questions/24205447/catch-click-event-on-absolute-position-element

//funcion que cambia digitos Lol
/*function machine(element, text) {
  let cont = 0; //contador
  let velocidad = 4;

  //add to your img for dog

  let v = velocidad;
  let indice = [0, v];
  //console.log(indice)
  document.body.addEventListener("keydown", (e) => {
    if (cont < text.length && velocidad == 1) {
      element.textContent += text[cont];
      cont++;
    } else if (indice[1] <= text.length && velocidad > 1) {
      let nuevo = "";
      for (let i = indice[0]; i < indice[1]; i++) {
        nuevo += text[i];
        if (text[i] == undefined) {
          break;
        }
      }
      let sa = parseInt(indice[1]);
      indice[0] = sa;
      indice[1] = [sa + v];

      element.textContent += nuevo;
    }
    //           ejeX ,ejeY
    window.scrollBy(0, document.documentElement.scrollHeight);
  });
}*/
const ventana2 = document.querySelector(".ventana2");

/*---------------INPUT RANGE------------------------*/
const inputRange = document.querySelector(".inputRange");
const span = document.querySelector(".caja2__item2 span");

inputRange.oninput = () => {
  valor = parseInt(inputRange.value);
  if (valor > 0 && valor <= 10) {
    span.textContent = valor;
  } else {
    inputRange.setAttribute("min", 1);
    inputRange.setAttribute("max", 10);
  }
  return valor;
};
/*----------------FIN DE INPUT RANGE-------------------*/

/**/

function machine(element, text) {
  let cont = 0; //contador

  // let velocidad  = 4
  //add to your img for dog
  // let v = velocidad;
  let velocidad = 4;
  let v = velocidad;
  let indice = [0, v];
  //console.log(indice)
  //aqui enbes de poner el document.body poner solamente la ventana1
  ventana2.addEventListener("keydown", function prueba() {
    velocidad = inputRange.oninput();
    v = velocidad;
    if (cont < text.length && velocidad == 1) {
      element.textContent += text[cont];
      cont++;
    } else if (indice[1] <= text.length && velocidad > 1) {
      let nuevo = "";
      for (let i = indice[0]; i < indice[1]; i++) {
        nuevo += text[i];
        if (text[i] == undefined) {
          break;
        }
      }
      let sa = parseInt(indice[1]);
      indice[0] = sa;
      indice[1] = [sa + v];
      element.textContent += nuevo;
    }
    //           ejeX ,ejeY
    window.scrollBy(0, document.documentElement.scrollHeight);
  });
}

//texto = https://github.com/torvalds/linux/blob/master/kernel/acct.c
//hacemos peticion por ajax para traer el texto a inprimir LOL
/*
let textCambio = null;
new Promise((resolve, reject) => {
  const peticion = new XMLHttpRequest();
  peticion.open("GET", "dog.txt");
  peticion.send();
  peticion.onload = () => {
    let x = peticion.status.toString();
    if (x[0] == 2) {
      textCambio = peticion.response;
      resolve(textCambio)
      //	machine(textarea,peticion.response)
    }
  };
}).then((e)=>{
    machine(textarea,e)
})
*/

let textCambio = "";
let Promesa = new Promise((resolve, reject) => {
  const peticion = new XMLHttpRequest();
  peticion.open("GET", "dog.txt");
  peticion.send();
  peticion.onload = () => {
    let x = peticion.status.toString();
    if (x[0] == 2) {
      //textCambio = peticion.response;
      resolve(peticion.response);
    }
  };
});



Promesa.then((e) => {
  textCambio = e;
  machine(textarea, textCambio);
});

//VENTANA3

/*----------------AUDIO------------------*/

//esto de aqui es sobre el audio
const caja = document.querySelector(".caja2__item1__segundo__dos");
const div = document.querySelector(".primero > span");
const audio = document.querySelector("#audio");
const segundo = document.querySelector(".segundo");



audio.setAttribute("src","assets/dds.mp3")

const hijos = segundo.children;
const len = hijos.length;

function desaparecer(number) {
  for (let i = 0; i < len; i++) {
    hijos[i].style.opacity = number;
  }
}

let i = false;
let a  = 0 
text.onclick = ()=>{
  a++
  if(a == 1){
    audio.play()
    textarea.textContent="";
    console.log("hoal")
  }
}



caja.onclick = (e) => {
  i = !i;
  if (i) { //apagar
    div.style.height = "0%";
    audio.play();
    desaparecer(1);
  } else { //prender
    div.style.height = "70%";
    audio.pause();
    desaparecer(0);
  }
};

caja.click()


//----------------------------FIN AUDIO---------------------

//------------animacion caja
const ekis = document.querySelector(".ekis");
const ventana3 = document.querySelector(".ventana3__container");
const cajaReal = document.querySelector(".caja");

ventana3.style.height = window.innerHeight;

/*
setInterval(()=>{
  console.log(ventana2.clientHeight)
},1000)*/
/*
ventana3.onclick = () => {
  iconoToggle();
  ventana3.style.visibility = "hidden";
};
*/

icono.addEventListener("click", () => {
  ventana3.style.visibility = "visible";
  ventana3.style.zIndex = "100";
  cajaReal.classList.toggle("cajaGo");
  ventana2.style.filter = "blur(1px)";
  //agregar animacion caja abajo
});

ekis.onclick = () => {
  iconoToggle();
  ventana3.style.visibility = "hidden";
  cajaReal.classList.toggle("cajaGo");
  ventana2.style.filter = "blur(0)";
};

/*-----------fin de animacion caja-*/

/*------------READ----------------- */
const cajaInput = document.querySelector("div.caja2__item3__dos");
//const inputTexto = document.querySelector("#inputTexto");
const nombreArchivo = document.querySelector(".caja2__item3__dos > p");
const imgFile = document.querySelector(".imgFile");

cajaInput.onclick = (e) => {
  e.target.style.background = "black";
};

function arch() {
  inputTexto.oninput = (e) => {
    //agregamos el nombre de archivo a la etiqueta "P"
    let name = e.target.files[0].name;
    nombreArchivo.textContent = name;

    let reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = (r) => {
      console.log(r.target.result+"#hoilaaaaaa");
      imgFile.style.setProperty("fill", "rgb(204, 241, 207)");
      nombreArchivo.style.color = "white";
      textCambio = r.target.result;
      textarea.textContent = "";
      machine(textarea, textCambio);
    };
  };
}

/*
window.oncontextmenu = (e) =>{
  e.preventDefault()
}
*/
inputTexto.onclick = () => {
  const attr = inputTexto.getAttribute("accept");
  attr == ".txt" ? arch() : inputTexto.setAttribute("accept", ".txt");
};

/*--------------fin de read--------------------*/
