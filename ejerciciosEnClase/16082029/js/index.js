/*let variables = "DW"; /* pueden cambiar las variables con el tiempo
const seccion = "A"; /* son constantes y no cambiaran

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

console.log(clase)*/


let parrafo = document.getElementById("parrafo")
console.log(parrafo);
parrafo.style.color="red";

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

for(let i=0; i<parrafos.length; i++){
    parrafos[i].style.fontSize="25px";
}


let ccolor = document.getElementsByClassName("ccolor");
console.log(ccolor);

for(let i=0; i<ccolor.length; i++){
    ccolor[i].style.fontSize="25px";
    ccolor[i].style.color="blue";
}

let query=document.querySelector("#parrafo");
query.style.color="green";

let querys=document.querySelectorAll("div.ccolor");
console.log(querys);
query.classList.add("eliminar");

let boton=document.getElementById("btn");
boton.addEventListener("click", function(){
    query.classList.add("eliminar");
}); /*evento para escuchar */
function eliminar(){
    query.classList.toggle("eliminar");
};

