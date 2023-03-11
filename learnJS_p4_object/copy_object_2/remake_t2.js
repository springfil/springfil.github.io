//Копирование обьектов
let obj = {
    a: 1,
    b: 2,
} 
let objCopy = obj;
obj.a = 5;
console.log(objCopy.a) //5 
//мы имеем доступ к св-ву а через переменные obj // objCopy


//простой способ копирования обьектов 
const mainObj = {
    a: 1,
    b: 2,
    c: {
        d: 44,
        r: 'lol',
    },
}

let objCopy = {}; //objCopy будет хранить копию mainObj
let key; 

for(key in mainObj){
    objCopy[key] = mainObj[key] // копируем каждое св-во.
}

console.log(mainObj); // {a: 1, b: 2, c: {…}}
console.log(objCopy);


//Object.assign - копирует только топ-лвл св-ва.
//Используется для поверхностного копирования
const obj = {
    a: 1,
    b: 'lol',
}
let objCopy = Object.assign({},obj);
console.log(objCopy);

//но вложенные св-ва. доступны как оригиналу так и копии 
    const obj = {
        a: 1,
        b: 2,
    }
    let objCopy = Object.assign({},obj);

    console.log(objCopy);
    objCopy.b = 80;
    console.log(objCopy);// 1 // 80
    console.log(obj)//1 // 2 

//Object.assign с вложенными св-вами.
const obj = {
    a: 1,
    b: {
        c:2,
    },
}
let newObj = Object.assign({}, obj);
console.log(newObj);// a:1, b:{c:2}

obj.a = 10;
console.log(obj);// a:10, b:{c:2}
console.log(newObj);// a:1, b:{c:2}

newObj.a = 20;
console.log(obj);// a:10, b:{c:2}
console.log(newObj);// a:20, b:{c:2}

newObj.b.c = 30;
console.log(obj);// a:10, b:{c:30}  // вложенные обьекты будут работать по ссылке 
console.log(newObj);// a:20, b:{c:30}



// глубокое копирование - скопирует каждый обьект на пути копирования, ниче общего не будет 
const obj = {
    a: 1,
    b: {
        c:2,
    },
}

let newObj = JSON.parse(JSON.stringify(obj));
obj.b.c = 'lol';
console.log(obj); //a:1, b:{c:'lol'}
console.log(newObj); // a:1, b:{c:2}
//копирует свойства в порядке их создания, если они не целочисленные 

//structuredClone()
const original = { name: "MDN" };
original.itself = original;

const clone = structuredClone(original);
console.log(clone !== original); 
console.log(clone.name === "MDN"); 


// копирование через [...obj]
// работает как Object.assign
const obj = {
    a: 1,
    b: 4,
}

let newObj = {...obj};
console.log(newObj);