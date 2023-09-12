/*
boolean
number
bigint
string
null
undefined
symbol
*/

let num // any

let num1 = 1 // number
num1 = true
num1 = 'zopa'

//так можно , но не надо
let number: number = 1
let string: string = `anilibria${number}`
let mysymbol = Symbol("frfrfr")

// тут надо явно задать , иначе тип any
let myNull:null = null
let myUnderfined:undefined = undefined
// myUnderfined = null // ругаемся
