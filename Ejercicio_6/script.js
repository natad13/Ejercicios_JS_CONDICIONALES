
let num1 = prompt("Ingrese el Primer Numero");
let num2 = prompt("Ingrese el Segundo Numero");
let num3 = prompt("Ingrese el Tercer Numero");
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

// num 1=10 num =2

if (num1 == num2 | num1 == num3 | num2 == num3 )  {
    console.log (`Dos de los numeros ingresados son iguales`);
    document.write(`<h2>Dos de los numeros ingresados son iguales <\h2>`);

}
else  if (num1 > num2 && num1 > num3) {

    document.write(`ENTRO AL IF`);
    console.log (`El numero 1: ${num1} es MAYOR  a los demas numeros ingresados`);
    document.write(`<h2>El numero 1: ${num1} es MAYOR  a los demas numeros ingresados <\h2>`);
 
    
}
else if (num2 > num1 && num2 > num3)  {
    console.log (`El numero 2: ${num2} es MAYOR  a los demas numeros ingresados`);
    document.write(`<h2>El numero 2: ${num2} es MAYOR  a los demas numeros ingresados <\h2>`);


}

else if (num3 > num1 && num3 > num1)  {
    console.log (`El numero 3: ${num3} es MAYOR  a los demas numeros ingresados`);
    document.write(`<h2>El numero 3: ${num3} es MAYOR  a los demas numeros ingresados <\h2>`);


}
else if (num1 == num2 | num1 == num3 | num2 == num3 )  {
    console.log (`Dos de los numeros ingresados son iguales`);
    document.write(`<h2>Dos de los numeros ingresados son iguales <\h2>`);

}

