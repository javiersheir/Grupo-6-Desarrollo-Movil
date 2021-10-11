function ejercicioUno(){
    let opcion = prompt ("Digita una opción: ", 1);
    console.log("Su opción es: "+opcion);

}
//ejercicioUno();

function ejercicioDos(){
    let nombre = prompt ("Digita su nombre: ");
    alert("Hola usuario: "+nombre);

}
//ejercicioDos();

function ejercicioTres(){
    let numero = prompt ("Digita un número: ");
    if(numero>0){
    	alert(numero+" es mayor a cero");
    }
    else if(numero<0){
    	alert(numero+" es menor a cero");
    }
    else{
    	alert(numero+" es igual a cero");
    }

}
//ejercicioTres();


function ejercicioCuatro(){
    let n1 = prompt("Digita un número: ");
    let n2 = prompt("Digita otro número: ");
    let resultado;
    resultado = parseInt(n1) + parseInt(n2);
    console.log(n1+" + "+n2+" = "+resultado);
    resultado = n1 - n2;
    console.log(n1+" - "+n2+" = "+resultado);
    resultado = n1 * n2;
    console.log(n1+" x "+n2+" = "+resultado);
    resultado = n1 / n2;
    console.log(n1+" / "+n2+" = "+resultado);

}
//ejercicioCuatro();

function ejercicioCinco(){
    let n1 = prompt("Digita un número: ");
    let n2 = prompt("Digita otro número: ");
    let opcion = prompt("Seleccione una opción \n1. Suma \n2. Resta \n3. Multiplicación \n4. División \n5. Potencia \n6. Radicación.")
    let resultado;
    if(opcion==1){
      resultado = parseInt(n1) + parseInt(n2);
      alert(n1+" + "+n2+" = "+resultado);
    }
    else if(opcion==2){
      resultado = parseInt(n1) - parseInt(n2);
      alert(n1+" - "+n2+" = "+resultado);    
    }
    else if(opcion==3){
      resultado = parseInt(n1) * parseInt(n2);
      alert(n1+" x "+n2+" = "+resultado);
    }
    else if(opcion==4){
      resultado = parseInt(n1) / parseInt(n2);
      alert(n1+" / "+n2+" = "+resultado);
    }
    else if(opcion==5){
      resultado = parseInt(n1) ** parseInt(n2);
      alert(n1+" ** "+n2+" = "+resultado);
    }
    else if(opcion==6){
      resultado = parseInt(n1) ** parseInt(1/n2);
      alert(n1+" ** "+n2+" = "+resultado);
    }
}
//ejercicioCinco();

function ejercicioSeis(){
let a=prompt("ingrese su fecha de nacimiento (dd-mm-yyyy)");
let b=a.split("-");
let fecha= new Date();
let dd=fecha.getDate();
let mm=fecha.getMonth();
let yyyy=fecha.getFullYear();
let final=yyyy-parseInt(b[2]);
if (dd>b[0] && mm>b[1]){
	final=final-1;
	alert(final);
}else {
	alert(final);
}

}
//ejercicioSeis();


function ejercicioSiete(){
    let numero = prompt ("Digita su edad: ");
    if(numero > 0 && numero< 18){
    	alert("Menor de edad");
    }
    else if(numero<70){
    	alert("Mayor de edad");
    }
    else{
    	alert("Adulto mayor");
    }
}
ejercicioSiete();