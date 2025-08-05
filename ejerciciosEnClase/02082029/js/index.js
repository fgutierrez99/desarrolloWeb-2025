let variables = "DW"; /* pueden cambiar las variables con el tiempo*/
const seccion = "A"; /* son constantes y no cambiaran*/
variables="Sección A";
console.log("Hola mundo", variables, seccion);

let dom = document.getElementById("elementoUnico");
let clase = document.getElementsByClassName("especial");
let etiqueta = document.getElementsByTagName("p")

console.log(dom)
for(let i=0; i<clase.length; i++){
    clase[i].style.background="red";
    console.log(clase[i]);
}

for(let i=0; i<etiqueta.length; i++){
    clase[i].style.color="blue";
    console.log(etiqueta[i]);
}

console.log(clase)
