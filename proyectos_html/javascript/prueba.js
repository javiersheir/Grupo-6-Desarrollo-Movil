var nombre = prompt("Introducir Nombre");
alert("Hola mundo");

var entero = prompt("Introducir un numero entero: ");

if(entero > 0){
    console.log("mayor");
}else{
   console.log("menor");
}

var numero1 = parseInt(prompt("Primer numero: "));

var numero2 = parseInt(prompt("Segundo numero: "));

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

console.log("La suma es: "+suma);
console.log("La resta es: "+resta);
console.log("La multiplicacion es: "+multiplicacion);
console.log("La division es: "+division);