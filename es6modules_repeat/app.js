import { random, uniq } from "lodash"; // именованный эскпорт
import axios from "axios";
import aboba from "./src/constants";
import { town, weather, value, valueUpperCase, usersURL as url, mapUsers } from "./src/constants";

const numbers = [1, 2, 2, 2, 3, 3, 6, 6, 6, 6, 500];
console.log(uniq(numbers));

const name = "aboba";
for (let letter of name) {
  console.log("letter —> ", letter);
}

console.log("aboba - ", aboba);
console.log("the weather is ", weather, " in ", town);
console.log("value | valueUpperCase ", value, " | ", valueUpperCase);

axios.get(url).then((data) => {
    const users = data.data;
    const usersMapped = mapUsers(users);
    console.log(users);
    console.log(usersMapped)
})


