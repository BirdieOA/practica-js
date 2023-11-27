const CAJA = document.querySelector(".caja");
for (let k = 0; k < 10; k++) {

const BOTON=document.createElement("button");
BOTON.textContent=`Boton ${k+1}`;
BOTON.classList.add("bt"+k);
CAJA.appendChild(BOTON);
BOTON.addEventListener("click", saludar);


//   CAJA.insertAdjacentHTML("beforeend", `<button>Boton ${k}</button>`);
//   document.querySelectorAll("button")[k].addEventListener("click", saludar);
}

function saludar() {
  alert("HOLA A TODOS");
}

//el innerHTML Solo se tiene que utilizar cuando queremos eliminar el contenido que hay dentro de una caja y crear un nuevo contenido.

//para insertar un nuevo contenido es insertAdjacentHTML 


//si en vez de escribir "beforeend" escribo afterbegin me aparece del boton 10 al 1, seria un orden inverso

//si ponemos beforebegin lo coloca fuera de la caja y antes de ella

//si ponemos afterend aparece primero la caja, el contenido fuera y tambien en orden inverso.

//textContent para definir el contenido que ira dentro

