let language: 'js' | 'ts' | ['1c','etc'] = 'js'
//language = ['2',"2"]

const setLanguage = (mylanguage: 'js' | 'ts' | ['1c','etc']): void => {
    mylanguage = 'ts'
}



//types
type Language = 'js' | 'ts' | ['1c','etc'] | [2,2] | {} | string[]

let chooseLanguage: Language = 'js'

function setLanguage2(mylanguage: Language): Language {
    return mylanguage
} 

setLanguage2("ts")



//Enum - перечисление логически связанных констант , где значением выступают числа | строки

const enum Env {
    Development,
    Staging,
    Production
} // если значение не задано то от 0 до n

const enum Language2 {
    JS = "javascript",
    TS = 'typescript',
}

let language2: Language2 = Language2.JS

function setLanguage3(mylanguage: Language2): Language2 {
    return mylanguage
}

setLanguage3(Language2.TS)