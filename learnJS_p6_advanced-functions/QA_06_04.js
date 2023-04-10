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
