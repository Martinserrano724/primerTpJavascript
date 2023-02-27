//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num1 = parseInt(prompt ('¿Ingrese numero 1?'));
let num2 = parseInt(prompt ('¿Ingrese numero 2?'));
let num3 = parseInt(prompt ('¿Ingrese numero 3?'));

if(num1 >= num2 && num1 >= num3){
    document.write('numero mayor '+num1);
}
else{
    if(num2 >= num1 && num2 >= num3){
        document.write('numero mayor '+num2);
    }
    else{
        document.write('numero mayor '+num3);
    }
}