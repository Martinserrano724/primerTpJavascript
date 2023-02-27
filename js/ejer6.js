//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt(prompt ('¿Ingrese numero 1?'));
let num2 = parseInt(prompt ('¿Ingrese numero 2?'));

if(num1 >= num2){
    document.write('numero mayor '+num1);
}
else{
    document.write('numero mayor '+num2);
}