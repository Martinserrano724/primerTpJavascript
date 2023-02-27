//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let Frase = prompt ('¿Ingrese La frase?');

document.write('Vocales: ')
for (let i = 0; i < Frase.length; i++) {
    if (Frase[i]=='A' || Frase[i]=='a' || Frase[i]=='E' || Frase[i]=='e' || Frase[i]=='I' || Frase[i]=='i' || Frase[i]=='o' || Frase[i]=='O' || Frase[i]=='U' || Frase[i]=='u') {
        document.write(' - '+Frase[i])
    }
}
