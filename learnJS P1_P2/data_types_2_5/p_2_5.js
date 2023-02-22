// существует 8 типов данных число, bigInt, строка,булевый тип,null,undefined,объекты,символы
// переменная может содержать любые данные

// числа целочисленные значения, так и числа с плавающей точкой
// Infinity, -Infinity и NaN - вычислительная ошибка
alert("не число" / 2); // NaN, такое деление является ошибкой
// любое значение на NaN -> NaN , кроме NaN ** 0 равно 1

// BigInt
// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// Строка
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

//boolean true/false
let isGreater = 4 > 1;
alert(isGreater); // true (результатом сравнения будет "да")

// null - ссылка на несуществующий обьект / тобишь значение неизвестно

//undefined - значение не присвоено , используется для проверки
let age = 123;

// изменяем значение на undefined
age = undefined;

alert(age); // "undefined"

//Объекты хранят в себе много че
//Вызов typeof x возвращает строку с именем типа:
typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"  (1) //специальное значение с отдельным типом.
typeof null; // "object"  (2) //специальное значение с отдельным типом для совместимости
typeof alert; // "function"  (3) // Функции относятся к объектному типу.
