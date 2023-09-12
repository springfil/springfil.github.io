// any - включает в себя все остальные типы
// не рекомендуется юзать
// можно когда например пишем тесты или получаем данные с заведомо неизвестным типом

let test:any = false 
test.map(({}) => ({}).toString()) // заебись вода



//Unknown 
let test2: unknown = 123
//test.map()  - нельзя
let str: string = test //ок 
//let str2: string = test2 // нельзя



// void - пусто , для ф-ций которые ниче не возвращают
function foo(...args: number[]): void{
   // return 1
}

const creater = (a = 5): void => {
    test * a
}