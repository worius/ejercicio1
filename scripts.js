'use strict'

var score = 0;
var vidas = 4;

function uno(){
    var Respuesta1 = parseInt(prompt('%cPregunta n° 1: De que color es la franja media de la bandera argentina?\n1. Verde \n2. Azul \n3.Blanca \n4. Roja', "Ingrese el numero de su Respuesta"));
    if(Respuesta1 == 3){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        console.log("Tu Puntaje Es " + score + " Te Quedan " + vidas + " Vidas");
        dos();
    }else if(vidas <= 0){
        console.log("FIN DEL JUEGO!!!");
        console.log("Tu Puntaje Total Es " + score + " Te Quedaste Sin Vidas");
    }else{
        console.log('%cINCORRECTO!!! Pierdes 1 punto y 1 vida', 'color: red;');
        if(score <= 0){}
        else{
            score--;
        } 
        vidas--;
        uno();
    }
}
function dos(){
    console.log('%cPregunta n° 2: Cual es el ingrediente que le da el color caracteristico al locro?', 'color: yellow;');
    console.log("1. Apio \n2. Zanahoria \n3.Cerdo \n4. Calabaza");
    var Respuesta2 = parseInt(prompt("Ingrese el numero de su Respuesta"));
    if(Respuesta2 == 4){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        console.log("Tu Puntaje Es " + score + " Te Quedan " + vidas + " Vidas");
        tres();
    }else if(vidas <= 0){
        console.log("FIN DEL JUEGO!!!");
        console.log("Tu Puntaje Total Es " + score + " Te Quedaste Sin Vidas");
    }else{
        console.log('%cINCORRECTO!!! Pierdes 1 punto y 1 vida', 'color: red;');
        if(score <= 0){}
        else{
            score--;
        } 
        vidas--;
        dos();
    }
}
function tres(){
    console.log('%cPregunta n° 3: Que se celebra el dia 20 de junio en Argentina?', 'color: yellow;');
    console.log("1. Dia de la Bandera Nacional \n2. Dia de la Independecia \n3. Dia del Veterano de Malvinas \n4. Dia del Trabajador");
    var Respuesta3 = parseInt(prompt("Ingrese el numero de su Respuesta"));
    if(Respuesta3 == 1){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        console.log("Tu Puntaje Es " + score + " Te Quedan " + vidas + " Vidas");
        cuatro();
    }else if(vidas <= 0){
        console.log("FIN DEL JUEGO!!!");
        console.log("Tu Puntaje Total Es " + score + " Te Quedaste Sin Vidas");
    }else{
        console.log('%cINCORRECTO!!! Pierdes 1 punto y 1 vida', 'color: red;');
        if(score <= 0){}
        else{
            score--;
        } 
        vidas--;
        tres();
    }
}
function cuatro(){
    console.log('%cPregunta n° 4: Cuanto hubiesemos tardado en llegar a cualquier parte del mundo desde la estratosfera?', 'color: yellow;');
    console.log("1. 30 min \n2. 1 hora \n3. 1 Semana \n4. 5 horas");
    var Respuesta4 = parseInt(prompt("Ingrese el numero de su Respuesta"));
    if(Respuesta4 == 2){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        console.log("Tu Puntaje Es " + score + " Te Quedan " + vidas + " Vidas");
        cinco();
    }else if(vidas <= 0){
        console.log("FIN DEL JUEGO!!!");
        console.log("Tu Puntaje Total Es " + score + " Te Quedaste Sin Vidas");
    }else{
        console.log('%cINCORRECTO!!! Pierdes 1 punto y 1 vida', 'color: red;');
        if(score <= 0){}
        else{
            score--;
        } 
        vidas--;
        cuatro();
    }
}
function cinco(){
    console.log('%cPregunta n° 5: Quien es el Mejor luchador de 100% lucha?', 'color: yellow;');
    console.log("1. Viloni \n2. Rulo Verde \n3. Mosquito \n4. La Masa");
    var Respuesta5 = parseInt(prompt("Ingrese el numero de su Respuesta"));
    if(Respuesta5 == 4){
        console.log('%cCORRECTO!!!', 'color: green;');
        score++;
        console.log("Tu Puntaje Final Es " + score + " Te Sobraron " + vidas + " Vidas Bien Hecho!!!");
    }else if(vidas <= 0){
        console.log("FIN DEL JUEGO!!!");
        console.log("Tu Puntaje Total Es " + score + " Te Quedaste Sin Vidas");
    }else{
        console.log('%cINCORRECTO!!! Pierdes 1 punto y 1 vida', 'color: red;');
        if(score <= 0){}
        else{
            score--;
        } 
        vidas--;
        cinco();
    }
}
uno();