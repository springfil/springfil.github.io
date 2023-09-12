const arr: number[] = [0, 0]
const arr2: string[] = ['12','zopa']
const matrica: number[][] = [[],[2],[2]]


//matrica.map((item) => item.push("2"))
matrica.map((item) => item.push(1_000))

const tiptop: (number | string | boolean)[] = [false, 1, "aboba"]


//Кортежи - tuples - фиксированная длина не меньше 2-х
const garbage: [bigint, boolean, string] = [1n, false, 'tiptop']
garbage.push(2n)