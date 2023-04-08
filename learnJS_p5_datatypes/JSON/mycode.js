// 
const obj = {
    aboba : 1,
    biba : 2,
};
const str = JSON.stringify(obj);

console.log(str); // aboba 1 biba 2
console.log(typeof str)// string

const obj2 = JSON.parse(str, function reviver(key, value){return (key == "aboba") ? value * 2 : value});
console.log(obj2.aboba) // 2

const clone = {...obj2};
const clone1 = JSON.parse(JSON.stringify(obj2));
console.log(obj2 === clone1);//0
console.log(obj2 === clone);//0

//------
const obj4 = {
    nan: parseInt('NAN'),
    inf: Number.POSITIVE_INFINITY,
}

JSON.stringify(obj4);// nan - null inf - null

//--------
const aboba = {
    a: 1,
    b: 2,
    c: {
        a: 1,
        b: {
            a: 1,
            b: 2,
            toJSON: () => 'zopa'
        },
    },
}

const zopa = JSON.stringify(aboba, function replacer(key, value){
    if(typeof value === 'number') {
        return value * 3;
    }
    return value; 
});

console.log(zopa)// {"a":3,"b":6,"c":{"a":3,"b":"zopa"}}