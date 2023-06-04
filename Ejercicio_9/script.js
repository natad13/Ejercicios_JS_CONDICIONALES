
let topp = prompt("Buenos dias, Indiqueme Con que topping quiere su helado. Gracias").toLocaleUpperCase();

const sin = 50;


if (topp == "OREO")  {

    let total =sin + 10;

    document.write(`<h2> Tu helado tiene un costo de: ${total} MX <\h2>`);
}

else if (topp == "KITKAT")  {

    let total =sin + 15;

    document.write(`<h2> Tu helado tiene un costo de: ${total} MX <\h2>`);
}

else if (topp == "BROWNIE")  {

    let total =sin + 20;

    document.write(`<h2> Tu helado tiene un costo de: ${total} MX <\h2>`);
}

else  {

    document.write(`<h2> Lo sentimos no tenemos ese topping, Tu helado tiene un costo de: ${sin} MX <\h2>`);
}