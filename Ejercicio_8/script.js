
let cal = prompt("Ingrese su calificación");
cal = parseFloat(cal);
if (cal <= 10 && cal >=1)  {
    
    if (cal < 6) {
        document.write(`<h2> REPROBADO  <\h2>`);
    }

    else if (cal >= 6 && cal <=8) {
        document.write(`<h2> REGULAR<\h2>`);
    }

    else if (cal == 9) {
        document.write(`<h2> BIEN <\h2>`);
    }
    else if (cal == 10) {
        document.write(`<h2> EXCELENTE <\h2>`);
    }

}
else  {
    
    document.write(`<h2> La calificacion ingresada es incorrecta <\h2>`);

}

