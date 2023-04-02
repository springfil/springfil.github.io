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
    let checkSym = Symbol.keyFor(symbolDescription); 
    console.log(checkSym)
}

checkDescription(obj1, symba)
