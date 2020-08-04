function prueba(){
    console.log('Funciona')
}

let pantalla = document.getElementById("casillaNumero")

//var estado = 1 // 1=no hay suma anterior; 2=si hubo un resultado
var primerValor = '0'; //guardar número en pantalla
var segundoValor = '0'//Segundo valor
var iniciarNumero = true; //iniciar número en pantalla: 1=si; 0=no;
let operacionCapturada;
let estado;
let ans;

function escribirNumero(valorPulsado) {
    if(operacionCapturada){
        if (iniciarNumero==true) {
            pantalla.innerHTML=valorPulsado; 
            segundoValor=valorPulsado;
        }
         else {
            pantalla.innerHTML+=valorPulsado;
            segundoValor+=valorPulsado; 
            }
        iniciarNumero=false
    }
    else{
        if (iniciarNumero==true) {  // inicializar un número, 
           pantalla.innerHTML=valorPulsado; //mostrar en pantalla
           primerValor = valorPulsado; //guardar número;
           }
        else { //continuar un número
           pantalla.innerHTML+=valorPulsado; //añadimos y mostramos en pantalla.
           primerValor+=valorPulsado; //añadimos y guardamos
           }
        iniciarNumero=false //el número está iniciado y podemos ampliarlo.
    }
}

function operacion(operacion){
    switch (operacion){
        case 'suma':
            pantalla.innerHTML = 0
            iniciarNumero = true
            return operacionCapturada = 'suma'
            break;
        case 'resta':
            pantalla.innerHTML = 0
            iniciarNumero = true
            return operacionCapturada = 'resta'
            break;
        case 'multiplicacion':
            pantalla.innerHTML = 0
            iniciarNumero = true
            return operacionCapturada = 'multiplicacion'
            break;
        case 'division':
            pantalla.innerHTML = 0
            iniciarNumero = true
            return operacionCapturada = 'division'
            break;
        default:
            console.log('No hay operacion')
    }
}

function limpiar(){
    console.log('hola')
    primerValor = 0
    segundoValor = 0
    operacionCapturada = ''
    pantalla.innerHTML = 0
    iniciarNumero = true
}

function resultado(primerValor, segundoValor){
    switch(operacionCapturada){
        case 'suma':
            primervalorNumerizado = parseInt(primerValor)
            segundoValorNumerizado = parseInt(segundoValor)
            var resultado = primervalorNumerizado + segundoValorNumerizado
            pantalla.innerHTML = resultado
            ans = resultado
            primerValor = 0
            segundoValor = 0
            operacionCapturada = ''
            iniciarNumero = true
            estado = 'resultadoHecho'
            break
        case 'resta':
            primervalorNumerizado = parseInt(primerValor)
            segundoValorNumerizado = parseInt(segundoValor)
            var resultado = primervalorNumerizado - segundoValorNumerizado
            pantalla.innerHTML = resultado
            ans = resultado
            primerValor = 0
            segundoValor = 0
            operacionCapturada = ''
            iniciarNumero = true
            estado = 'resultadoHecho'
            break
        case 'multiplicacion':
            primervalorNumerizado = parseInt(primerValor)
            segundoValorNumerizado = parseInt(segundoValor)
            var resultado = primervalorNumerizado * segundoValorNumerizado
            pantalla.innerHTML = resultado
            ans = resultado
            primerValor = 0
            segundoValor = 0
            operacionCapturada = ''
            iniciarNumero = true
            estado = 'resultadoHecho'
            break
        case 'division':
            primervalorNumerizado = parseInt(primerValor)
            segundoValorNumerizado = parseInt(segundoValor)
            var resultado = primervalorNumerizado / segundoValorNumerizado
            pantalla.innerHTML = resultado
            ans = resultado
            primerValor = 0
            segundoValor = 0
            operacionCapturada = ''
            iniciarNumero = true
            estado = 'resultadoHecho'
            break
        default:
            console.log('No puedo hacer un resultado de esos numeros')
    }
}

function usarAns(){
    if(ans){
        pantalla.innerHTML = ans
        primerValor = ans
    }
    else{
        console.log('No hay un valor almacenado')
    }
}
////////////////////////////////////////////7
// class calculator{
//     constructor(){
//         this.valorA=0;
//         this.valorB=2;
//     }

//     suma(valor1,valor2){
//         this.valorA = valor1;
//         this.valorB = valor2;
//         return this.valorA + this.valorB;
//     }
// }

// const calculadora = new calculator;

// document.write(calculadora.suma(2,4))