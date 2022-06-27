"use strict";

function solveEquation(a, b, c) {
    let result = [];
    let discriminant = (b**2)-(4*a*c);

    if (discriminant < 0) {
        return result;
    } else if (discriminant === 0) {
        result.push( -b/(2*a) );

        return result;
    } else if (discriminant > 0) {
        result.push( (-b + Math.sqrt(discriminant) )/(2*a) );
        result.push( (-b - Math.sqrt(discriminant) )/(2*a) );

        return result;
    } else {
        alert(`Что-то пошло не так.`)
    }
}

console.log(solveEquation(1, 12, 5));