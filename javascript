function calcular() {

let tipo =
Number(document.getElementById("tipo").value);

let horas =
Number(document.getElementById("horas").value);

let luz =
document.getElementById("luz").checked;

let total = tipo;

total += horas * 120;

if(luz){
total += 500;
}

document.getElementById("resultado").innerHTML =
"Total: R$ " + total.toLocaleString("pt-BR");
}

function contador(id, fim){

let numero = 0;

let intervalo = setInterval(() => {

numero++;

document.getElementById(id).innerText =
numero;

if(numero >= fim){
clearInterval(intervalo);
}

},20);

}

window.onload = () => {

contador("eventos",250);
contador("clientes",500);
contador("anos",12);

}
