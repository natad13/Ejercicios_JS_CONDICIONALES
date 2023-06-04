
let coche= 0.20;
let moto = 0.10;
let autobus=0.5;

const litros1=5;
const litros2=10;


let opcion1 = prompt(` Seleccione el tipo de vehiculo que tiene:
1: Coche
2: Moto
3: Autobus `).toLocaleUpperCase();

let opcion2 = prompt(` Ingrese los litros consumidos`);
let opcion3 = prompt(` Ingrese los kilometros recorridos`);




if (opcion1 == 1) {

    if (opcion2 > 0 && opcion2 <= 100) {
    let total = (coche * opcion3)+litros1;   
    document.write(`<h2> TOTAL A PAGAR: ${total}  <\h2>`);
    }
    else if (opcion2 > 100) {
    let total = (coche * opcion3)+litros2; 
    document.write(`<h2> TOTAL A PAGAR: ${total}  <\h2>`);   
        
    }
    else{
        document.write(`<h2> la informacion ingresada es incorrecta<\h2>`);  
    }
    
}
else if (opcion1 == 2) {

    if (opcion2 > 0 && opcion2 <= 100) {
    let total = (moto * opcion3)+litros1;   
    document.write(`<h2> TOTAL A PAGAR: ${total}  <\h2>`);
    }
    else if (opcion2 > 100) {
    let total = (moto * opcion3)+litros2; 
    document.write(`<h2> TOTAL A PAGAR: ${total}  <\h2>`);   
        
    }
    else{
        document.write(`<h2> la informacion ingresada es incorrecta<\h2>`);  
    }
    
}
else if (opcion1 == 3) {

    if (opcion2 > 0 && opcion2 <= 100) {
    let total = (autobus * opcion3)+litros1;   
    document.write(`<h2> TOTAL A PAGAR: ${total}  <\h2>`);
    }
    else if (opcion2 > 100) {
    let total = (autobus * opcion3)+litros2; 
    document.write(`<h2> TOTAL A PAGAR: ${total}  <\h2>`);   
        
    }
    else{
        document.write(`<h2> la informacion ingresada es incorrecta<\h2>`);  
    }
    
}
else{
    document.write(`<h2> la informacion ingresada es incorrecta<\h2>`);  
}
