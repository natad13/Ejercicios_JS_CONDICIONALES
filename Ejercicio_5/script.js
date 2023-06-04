
let num1 = prompt("Ingrese el Primer Numero");
let num2 = prompt("Ingrese el Segundo Numero");
num1 = parseInt(num1);
num2 = parseInt(num2);

// num 1=10 num =2
if (num1<num2) {

    document.write(`ENTRO AL IF`);
    console.log (`El numero 1: ${num1}, es menor al numero 2: ${num2}`);
    document.write(`<h2>El numero 1: ${num1}, es menor al numero 2: ${num2} <\h2>`);
 
    
}
else if (num2<num1)  {
    console.log (`El numero 2: ${num2}, es menor al numero 1: ${num1}`);
    document.write(`<h2>El numero 2: ${num2}, es menor al numero 1: ${num1} <\h2>`);


}
else{
    document.write("Los numero son iguales")
}

