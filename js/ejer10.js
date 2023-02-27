//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
// (sólo hay que comprobar si lo es por uno de los cuatro)

let num1 = parseInt(prompt ('¿Ingrese numero 1?'));


if((num1 % 2)==0){
    document.write('el numero:'+num1+' Si es Divisible en 2 ');
}
else{
    if((num1 % 3)==0){
        document.write('el numero:'+num1+' Si es Divisible en 3 ');
    }
    else{
        if((num1 % 5)==0){
            document.write('el numero:'+num1+' Si es Divisible en 5 ');
        }
        else{
            if((num1 % 7)==0){
                document.write('el numero:'+num1+' Si es Divisible en 7 ');
            }
            else{
                document.write('el numero:'+num1+' No Divisible en 2,3,5,7 ');
            } 
        }
    }
}
