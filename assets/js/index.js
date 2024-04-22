console.log("hola mundo")

// calculadora

let firstNumber =  1 //prompt("Ingrese el valor #1")
let secondNumber = 2 //prompt("Ingrese el valor #2")

/**
 * Esta funcion realiza una suma
 * params: n1 & n2 
 * return sum(n1,n2)
*/
function sumaDeNumeros(n1 , n2){
    return n1 + n2
}

const restaDeNumeros = function(n1,n2){
    return n1 - n2
}

const multiplyNumbers = (n1 ,n2) => n1 * n2
const divisionNumber = (n1,n2)  => n1 / n2

/**
 * fn - pageWriter
 *  Función para imprimir texto en pantalla.
 * @param {string} operacionImprimir - La operación que se realizó.
 * @param {number} valor - El valor a imprimir.
 * @return {void}
 */
const pageWriter = (operacionImprimir,valor) => {
    let textoImprimir = `<h2>La ${operacionImprimir} total es de : ${valor} </h2>`
    document.write(textoImprimir)
    return null
}


let sumaTotal = sumaDeNumeros(firstNumber, secondNumber) 
let restaTotal = restaDeNumeros(firstNumber,secondNumber)
let multiplicacionTotal = multiplyNumbers(firstNumber,secondNumber)
let divisionTotal = divisionNumber(firstNumber,secondNumber)

// pageWriter("suma",sumaTotal)
// pageWriter("resta",restaTotal)
// pageWriter("multiplicacion",multiplicacionTotal)
// pageWriter("division",divisionTotal)

// document.write(`<h2>La suma total es de : ${sumaTotal} </h2>`)

// document.write(`<h2>La resta total es de : ${restaDeNumeros(firstNumber,secondNumber)} </h2>`)


// hacete una calculadora

const imprimirCalculo = pageWriter

function realizarCalculo( fnCalculo, n1, n2 ){
    return fnCalculo(n1,n2)
}

function tomarNumbers(){
    let number = prompt("Numero a ingresar") 
    return Number(number)
}

function pedirOperacion(){
    let operacion = prompt(
        `
        1 - suma
        2 - resta
        3 - multiplcacion
        4 - division
        otro -> no tiene validez  
        `
    )
    return operacion
}

function main(){

    document.write(
        `
            <h2>Vas a hacer una calculadora de manera manual</h2>
            <p>
                Deberas ingresar las opciones de 
                <li>1 - suma</li>
                <li>2 - resta</li>
                <li>3 - multiplcacion</li>
                <li>4 - division</li>
                <li>otro -> te fuiste al pasto</li>
            </p>
        `
    )


    let operacion = pedirOperacion()
    
    let n1 = tomarNumbers()
    let n2 = tomarNumbers()
 
    let operacionMatematica 
    let nombreOperacion

    if (operacion == 1 ){
        operacionMatematica = sumaDeNumeros
        nombreOperacion = "suma"
    }
    else if(operacion == 2){
        operacionMatematica = restaDeNumeros
        nombreOperacion = "resta"
    }
    else if(operacion == 3){
        operacionMatematica = multiplyNumbers
        nombreOperacion = "multiplicacion"
    }
    else if(operacion == 4){
        operacionMatematica = divisionNumber
        nombreOperacion = "division"
    }
    else{
        operacionMatematica = (n1,n2) => null
        nombreOperacion = "ehh... nada"
    }

    let resultado = realizarCalculo( operacionMatematica, n1 , n2 )

    imprimirCalculo(nombreOperacion , resultado)

}



main()





