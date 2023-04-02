const obj = {
    number: 89299727029,
    [Symbol.iterator]() {
      const v = Array.from(this.number.toString())
      return {
        next: () => ({
          done: v.length === 0,
          value: v.shift()
        })
      }
    }
  }
  
  for (const i of obj) {
    console.log(i)
  }


//строка тож перебираемый обьект
const nums = '12345'

for (const num of nums) {
  console.log(num)
}//1 2 3 4 5


//---------
