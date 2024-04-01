// Primera propuesta de solución. Tiene el inconveniente de que si el número es igual a 50, se mostrará incorrectamente ¡El número es menor que 50!

function greaterLessFifty(numOne, numTwo, numThree, numFour) {
    let result = (numOne + numTwo) * (numThree + numFour);
    const message = result > 50 ? "¡El número es mayor que 50!" : "¡El número es menor que 50!";

    console.log(message);
}


greaterLessFifty(10, 2, 40, 67);
greaterLessFifty(1, 2, 1, 3);

// Alternativa que cubre la opción de que el resultado sea igual a 50

const mayorMenorCincuenta = (numUno, numDos, numTres, numCuatro) => {
    let resultado = (numUno + numDos) * (numTres + numCuatro);
    if (resultado > 50) {
        console.log('¡El número es mayor que 50!');
    } else if (resultado < 50) {
        console.log('¡El número es menor que 50!');
    } else if (resultado === 50) {
        console.log('¡El número es 50!');
    }
}

mayorMenorCincuenta(10, 2, 40, 67);
mayorMenorCincuenta(1, 2, 1, 3);
mayorMenorCincuenta(20, 5, 1, 1);