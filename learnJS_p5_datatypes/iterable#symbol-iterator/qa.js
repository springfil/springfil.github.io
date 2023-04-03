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


//---- переписать на array.from
{
// // заполню  0 
// let arr2 = Array(5).fill(0);
// console.log(arr2);//[0 0 0 0 0]

// //хочу какие-то числа в порядке возрастания
// const arr3 = arr2.map( function(val, index) {return index + 1;} );
// console.log(arr3) ;// 1 2 3 4 5
}

let arr2 = new Array(5).fill(0);
console.log(arr2);
Array.from(arr2, (x,el) => el++)
