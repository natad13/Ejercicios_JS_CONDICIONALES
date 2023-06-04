
let dia = prompt("Ingresa un Dia de la semana").toLocaleUpperCase();



if (dia == "LUNES" )  {
    console.log ("HOY ES LUNES");
    document.write(`<h2> HOY ES LUNES <\h2>`);

}
else if (dia == "VIERNES" )  {
    console.log ("HOY ES VIERNES");
    document.write(`<h2> HOY ES VIERNES <\h2>`);

}
else if (dia == "SABADO" || dia == "DOMINGO"  )  {
    console.log ("HOY ES DIA PARA DESCANSAR");
    document.write(`<h2> HOY ES DIA PARA DESCANSAR <\h2>`);

}
else if (dia == "MARTES" || dia == "JUEVES" || dia == "MIERCOLES"  ){
    console.log ("HOY DEBES TRABAJAR");
    document.write(`<h2> HOY DEBES TRABAJAR <\h2>`);
}
