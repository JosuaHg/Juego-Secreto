/*
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

*/
/*
//Ejercicio 1
let listaGenerica = [];
console.log(listaGenerica);

//ejercicio 2

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' ,'Python'];
console.log(lenguagesDeProgramacion);

//Ejercicio 3
lenguagesDeProgramacion.push("Java", "Ruby" , "GoLang");

//Ejercicio 4
MostrarLenguajes ();

//Ejercicio 5
volteararray(lenguagesDeProgramacion);
*/
/*
//ejercicio 6
let numeros = [5 , 8 , 10,  15]; 
promedio(numeros);

//ejercicio 7

MayoroMenor (numeros);

//ejercicio 9

posición(numeros);

//ejercicio 10;
let numeros2 = [5, 10, 20, 3];
let sumalistas = [] = suma(numeros, numeros2);
console.log(sumalistas);

//ejercicio 11;

let multiplicacion1 = [] = cuadrado(numeros2);
console.log(multiplicacion1);

/*
function MostrarLenguajes ()
{
    console.log(lenguagesDeProgramacion);
    return;
}
/*
function volteararray(leng)
{
    let volteada = [];

    for ( var i = leng.length -1; i>=0; i--)
    {
    volteada.push(leng[i]);
    }
    console.log(volteada);
    return;
}*/
/*
function promedio (numeros)
{
    let divisor = numeros.length;
    let suma = 0;
    for ( var i = numeros.length -1; i>=0; i--)
    {
        suma = suma + numeros[i];
    }

    divisor = suma/divisor;
    
    console.log(divisor)

    return;
}
/*
function MayoroMenor(lista)
{
    function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);
}*/

/*
function MayoroMenor(numeros)
{
    let prueba = 0;
    let mayor = 0;
    let menor = numeros[0];

    for( let i = 1; i < numeros.length; i++)
    {
        prueba = numeros[i];
        pruebamenor = numeros[i];
        
        if(prueba>mayor)
        {
            mayor = prueba;
        }
        if (prueba < menor) {
            menor = prueba;
          }
    }
    console.log(mayor);
    console.log(menor);
    return;
}


function posición(numeros)
{
    let busca = 5;
    for(let i = 0 ; i<=numeros.length; i++)
    {
        if (busca === numeros[i])
        {
            console.log(`Si esta en la posicion ${i}`);
        }
        else {
            console.log("No esta")
        }
    }
    return;
}

function suma(lista,lista2)
{
    let suma = [];
    for( let i=0; i<lista.length; i++)
    {
        suma[i] = lista[i] + lista2[i];
        
    }
    return suma;
}

function cuadrado(lista)
{
    cuadrado =[];
    for( let i=0; i<lista.length; i++)
    {
        cuadrado[i] = lista[i] * lista[i];
        
    }
    return cuadrado;
}


/*
function posición(numeros)
{
    let busca =5;
    if (numeros.includes(busca)) {
        console.log("Si esta");
    }else{
        console.log("No esta");
    }

}*/





let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
