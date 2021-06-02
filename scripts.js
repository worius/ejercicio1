'use strict'

var score = 0;

function uno(){
    var Respuesta1 = parseInt(prompt('Pregunta n° 1: De que color es la franja media de la bandera argentina?\n1. Verde \n2. Azul \n3.Blanca \n4. Roja \nTu Puntaje Es : ' + score, "Ingrese el numero de su Respuesta"));
    if(Respuesta1 == 3){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        console.log("Tu Puntaje Es " + score);
        dos();
    }else if(score < 0){
        score--;
        console.log('%cINCORRECTO!!! Pierdes 1 punto', 'color: red;');
        dos();
    }
}
function dos(){
    var Respuesta2 = parseInt(prompt('Pregunta n° 2: Cual es el ingrediente que le da el color caracteristico al locro?\n1. Apio \n2. Zanahoria \n3.Cerdo \n4. Calabaza \nTu Puntaje Es : ' + score, "Ingrese el numero de su Respuesta"));
    if(Respuesta2 == 4){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        console.log("Tu Puntaje Es " + score);
        tres();
    }else if(score < 0){
        score--;
        console.log('%cINCORRECTO!!! Pierdes 1 punto', 'color: red;');
        tres();
    }
}
function tres(){
    var Respuesta3 = parseInt(prompt('Pregunta n° 3: Que se celebra el dia 20 de junio en Argentina?\n1. Dia de la Bandera Nacional \n2. Dia de la Independecia \n3. Dia del Veterano de Malvinas \n4. Dia del Trabajador \nTu Puntaje Es : ' + score, "Ingrese el numero de su Respuesta"));
    if(Respuesta3 == 1){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        console.log("Tu Puntaje Es " + score);
        cuatro();
    }else if(score < 0){
        score--;
        console.log('%cINCORRECTO!!! Pierdes 1 punto', 'color: red;');
        cuatro();
    }
}
function cuatro(){
    var Respuesta4 = parseInt(prompt('Pregunta n° 4: Cuanto hubiesemos tardado en llegar a cualquier parte del mundo desde la estratosfera?\n1. 30 min \n2. 1 hora \n3. 1 Semana \n4. 5 horas \nTu Puntaje Es : ' + score, "Ingrese el numero de su Respuesta"));
    if(Respuesta4 == 2){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        console.log("Tu Puntaje Es " + score);
        cinco();
    }else if(score < 0){
        score--;
        console.log('%cINCORRECTO!!! Pierdes 1 punto', 'color: red;');
        cinco();
    }
}
function cinco(){
    var Respuesta5 = parseInt(prompt('Pregunta n° 5: Quien es el Mejor luchador de 100% lucha?\n1. Viloni \n2. Rulo Verde \n3. Mosquito \n4. La Masa \nTu Puntaje Es : ' + score, "Ingrese el numero de su Respuesta"));
    if(Respuesta5 == 4){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        alert("Tu Puntaje Final Es " + score);
    }else if(score < 0){
        score--;
        console.log('%cINCORRECTO!!! Pierdes 1 punto', 'color: red;');
        alert("Tu Puntaje Final Es " + score);
    }
}