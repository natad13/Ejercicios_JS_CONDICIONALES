
let course= 4999;
let carrera = 3999;
let master=2999;


let opcion1 = prompt(` Seleccione el programa que desea tomar:
1: Course
2:Carrera
3: Master `).toLocaleUpperCase();

let opcion2 = prompt(` Cuenta con alguna beca`).toLocaleUpperCase();

if (opcion1 == 1 | opcion1 == 2 | opcion1 == 3) {
    if (opcion2 == "NO") {
        
        
        if (opcion1 == 1) {
            let total = course *2;
            document.write(`<h2> Tu Curso tiene un precio total de: ${total} MX <\h2>`);
        }
        else if (opcion1 == 2) {
            let total = carrera *6;
            document.write(`<h2> Tu Carrera tiene un precio total de: ${total} MX <\h2>`);
        }

        else if (opcion1 == 3){
            let total = master *12;
            document.write(`<h2> Tu Master tiene un precio total de: ${total} MX <\h2>`);
        }
        else {
            document.write(`<h2> La informacion ingresada es incorrecta<\h2>`);
        }
    }
    else if (opcion2 == "SI") {
        let beca = prompt(` Con cual de las siguientes becas cuenta
        1:Beca Facebook
        2:Beca Google
        3:Beca Jesua `); 
       

        if (beca == 1) {
            

            if (opcion1 == 1) {
             
                let desc = (course - ((course * 20)/100))*2;
                document.write(`<h2> Tu Curso tiene un precio total de: ${desc} MX <\h2>`);
                
            }
            else if (opcion1 ==2) {

                let desc = (carrera - ((carrera * 20)/100))*6;
                document.write(`<h2> Tu carrera tiene un precio total de: ${desc} MX <\h2>`);
            
            }
            else if (opcion1 ==3) {

                let desc = (master - ((master * 20)/100))*12;
                document.write(`<h2> Tu Master tiene un precio total de: ${desc} MX <\h2>`);
            
            }
        
        }

        else if (beca == 2) {
            document.write(`<h2> BECA =2 <\h2>`);

            if (opcion1 ==1) {

                let desc = (course - ((course * 15)/100))*2;
                document.write(`<h2> Tu Curso tiene un precio total de: ${desc} MX <\h2>`);
            
            }
            else if (opcion1 ==2) {

                let desc = (carrera - ((carrera * 15)/100))*6;
                document.write(`<h2> Tu carrera tiene un precio total de: ${desc} MX <\h2>`);
            
            }
            else if (opcion1 ==3) {

                let desc = (master - ((master * 15)/100))*12;
                document.write(`<h2> Tu Master tiene un precio total de: ${desc} MX <\h2>`);
            
            }
        
        }
        else if (beca == 3) {
            document.write(`<h2> BECA =3 <\h2>`);

            if (opcion1 =="1") {

                let desc = ((course - ((course *50)/100))*2).toFixed(2);
                document.write(`<h2> Tu Curso tiene un precio total de: ${desc} MX <\h2>`);
            
            }
            else if (opcion1 ==2) {

                let desc = ((carrera - ((carrera * 50)/100))*6).toFixed;
                document.write(`<h2> Tu carrera tiene un precio total de: ${desc} MX <\h2>`);
            
            }
            else if (opcion1 ==3) {

                let desc = ((master - ((master * 50)/100))*12).toFixed(2);
                document.write(`<h2> Tu Master tiene un precio total de: ${desc} MX <\h2>`);
            
            }
            
        
        }
        else {
            document.write(`<h2> La informacion ingresada es incorrecta<\h2>`);
        }
        
            
    }
    else {
        document.write(`<h2> La informacion ingresada es incorrecta<\h2>`);
    }



}
else{
    document.write(`<h2> La informacion ingresada es incorrecta<\h2>`);
}

