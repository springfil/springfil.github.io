const obj: object = {}
const obj2 = {} 
const obj3: {} = {}

//obj3.name // нет такого поля
obj.toString 

const junior: {
    name: string,
    age: number | string,
    language: string
    isStuped?: boolean // валидно isStuped: boolean | undefined
} = {
    name: 'Акакий',
    age: 20 + "7",
    language: "1C",
    isStuped: true 
}

//junior.isStuped = 'fasdf'
