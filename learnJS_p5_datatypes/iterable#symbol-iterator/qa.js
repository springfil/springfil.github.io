//есть несколько объектов 
//функция принимает obj{}и берет отттуда 'description' 
//функция достает symbol из глобального хранилища
//проверяет есть или у этого обьекта в этом символе что-то 

const obj1 = {
    a: 1,
};

const symba = Symbol.for('метка');
obj1[symba] = '1234';

function checkDescription (obj, symbolDescription){
    let checkSym = Symbol.for(symbolDescription); 
    console.log(checkSym)

    console.log((obj[checkSym] !== null && obj[checkSym] !== undefined) ? 1 : 0)
}

checkDescription(obj1, 'метка')
