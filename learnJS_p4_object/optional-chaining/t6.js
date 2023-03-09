let person = {
    name: 'anna',
    age: '23',
}

const typeGender = person?.gender ?? 'пол неизвестен';
console.log(typeGender)