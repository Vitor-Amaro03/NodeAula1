function somar (x,y){return (x+y)}
function subtrair (x,y){return(x-y)}
function multiplicar (x,y){return(x*y)}
function dividir (x,y){return(x/y)}
const resultadoSoma = somar(12,8)
const resultadoMulti = multiplicar(resultadoSoma, 3)
const resultadoDiv = dividir(10,2)
const resultadoFinal = subtrair(resultadoMulti, resultadoDiv)
console.log("Resolva a equação: (12 + 8) * 3 - 10 / 2")
console.log(`12 + 8 = ${resultadoSoma}`)
console.log(`20 * 3 = ${resultadoMulti}`)
console.log(`10 / 2 = ${resultadoDiv}`)
console.log(`60 - 5 = ${resultadoFinal}`)
