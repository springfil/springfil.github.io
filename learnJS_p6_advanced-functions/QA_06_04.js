const arr = [1, 2, 3, 4, 5];

arr[Symbol.iterator] = function () {
  let index = this.length;

  return {
    next: () => ({
      value: this[--index],
      done: index < 0,
    }),
  };
};

for (const item of arr) {
  console.log(item);
}
// index-- 5.4.3.2

const iterator = arr[Symbol.iterator]();

console.log(iterator.next().value); // 5
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // undefined done - true

// или нафиг надо, но пусть будет
{
function iterate(iterator) {
  const result = iterator.next();

  if (!result.done) {
    console.log(result.value);
    iterate(iterator);
  }
}

iterate(arr[Symbol.iterator]());
}