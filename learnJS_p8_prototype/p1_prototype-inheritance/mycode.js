let animal = {
    eats: true,
}

let cat = {
  meows: true,
  hasWhiskers: true,
  __proto__: animal,
};

for (let prop in cat) {
  let isOwn = cat.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: meows, Our: hasWhiskers
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}
