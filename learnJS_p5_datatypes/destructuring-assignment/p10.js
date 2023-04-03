{//Деструктурирующее присваивание
// Но когда мы передаём их в функцию []{}, то ей может понадобиться не объект/массив целиком,
// а элементы по отдельности.

// Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» 
// массивы или объекты в несколько переменных, так как иногда они более удобны.
}

{
//Деструктуризация массива

// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"];
// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname);  // Kantor

{let [firstName, surname] = "Ilya Kantor".split(' ');
alert(firstName); // Ilya
alert(surname);  // Kantor
}
{
// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
}

}