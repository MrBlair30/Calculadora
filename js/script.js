const cero = document.getElementById("cero");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const div = document.getElementById("div");
const mul = document.getElementById("mul");
const porcentaje = document.getElementById("porcentaje");
const igual = document.getElementById("igual");
const clear = document.getElementById("clear");
const punto = document.getElementById("punto");
const del = document.getElementById("del");

const screen_calc = document.getElementById("screen");
let screen_text;


uno.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 1;
})
dos.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 2;    
})
tres.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 3;
})
cuatro.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 4;
})
cinco.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 5;
})
seis.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 6;
})
siete.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 7;
})
ocho.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 8;
})
nueve.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 9;
})
cero.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + 0;
})
suma.addEventListener("click", () =>{
    if(screen_calc.value.includes("+") || screen_calc.value.includes("-") || screen_calc.value.includes("*") || screen_calc.value.includes("/") || screen_calc.value.includes("%")){
        screen_calc.value = screen_calc.value + "";
    }else{
    screen_calc.value = screen_calc.value + "+";
    }
})
resta.addEventListener("click", () =>{
    if(screen_calc.value.includes("+") || screen_calc.value.includes("-") || screen_calc.value.includes("*") || screen_calc.value.includes("/") || screen_calc.value.includes("%")){
        screen_calc.value = screen_calc.value + "";
    }else{
    screen_calc.value = screen_calc.value + "-";
    }
})
mul.addEventListener("click", () =>{
    if(screen_calc.value.includes("+") || screen_calc.value.includes("-") || screen_calc.value.includes("*") || screen_calc.value.includes("/") || screen_calc.value.includes("%")){
        screen_calc.value = screen_calc.value + "";
    }else{
    screen_calc.value = screen_calc.value + "*";
    }
})
div.addEventListener("click", () =>{
    if(screen_calc.value.includes("+") || screen_calc.value.includes("-") || screen_calc.value.includes("*") || screen_calc.value.includes("/") || screen_calc.value.includes("%")){
        screen_calc.value = screen_calc.value + "";
    }else{
    screen_calc.value = screen_calc.value + "/";
    }
})
porcentaje.addEventListener("click", () =>{
    if(screen_calc.value.includes("+") || screen_calc.value.includes("-") || screen_calc.value.includes("*") || screen_calc.value.includes("/") || screen_calc.value.includes("%")){
        screen_calc.value = screen_calc.value + "";
    }else{
    screen_calc.value = screen_calc.value + "%";
    }
})
punto.addEventListener("click", () =>{
    screen_calc.value = screen_calc.value + ".";
})
clear.addEventListener("click", () =>{
    screen_calc.value = "";
})
del.addEventListener("click", () =>{
    screen_text = screen_calc.value;       
    screen_calc.value = screen_text.slice(0, -1);  
})


igual.addEventListener("click", () =>{    
    screen_text = screen_calc.value;
    
    if (screen_text.includes("+")) {        
        screen_calc.value = sumar(screen_text);
    }else if(screen_text.includes("-")){
        screen_calc.value = restar(screen_text);
    }else if(screen_text.includes("*")){
        screen_calc.value = multiplicar(screen_text);
    }else if(screen_text.includes("/")){
        screen_calc.value = dividir(screen_text);
    }else if(screen_text.includes("%")){
        screen_calc.value = porc(screen_text);
    }
    
})

function sumar(text){
    text = screen_calc.value;
    text = text.split("+");
    let num1 = +text[0];
    let num2 = +text[1];
    let resultado = num1 + num2;
    return resultado;
}
function restar(text){
    text = screen_calc.value;
    text = text.split("-");
    let num1 = +text[0];
    let num2 = +text[1];
    let resultado = num1 - num2;
    return resultado;
}
function dividir(text){
    text = screen_calc.value;
    text = text.split("/");
    let num1 = +text[0];
    let num2 = +text[1];
    let resultado = num1 / num2;
    return resultado;
}
function multiplicar(text){
    text = screen_calc.value;
    text = text.split("*");
    let num1 = +text[0];
    let num2 = +text[1];
    let resultado = num1 * num2;
    return resultado;
}
function porc(text){
    text = screen_calc.value;
    text = text.split("%");
    let num1 = +text[0];
    let num2 = +text[1];
    let resultado = num1 * (num2/100);
    return resultado;
}