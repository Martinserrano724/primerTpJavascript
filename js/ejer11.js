//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
//(hay que decir todos por los que es divisible)

let num1 = parseInt(prompt("¿Ingrese numero ?"));

let valor = `el numero: ${num1} es divisible en: `;

if (num1 % 2 == 0) {
  valor += " 2,";
}
if (num1 % 3 == 0) {
  valor += " 3,";
} 
if (num1 % 5 == 0) {
    valor += " 5,";
} 
if (num1 % 7 == 0) {
      valor += " 7,";
} 
if ((num1 % 7 != 0)&&(num1 % 5 != 0)&&(num1 % 3 != 0)&&(num1 % 2 != 0)){
      document.write("el numero:" + num1 + " No Divisible en 2,3,5,7 ");
}

document.write(valor);
