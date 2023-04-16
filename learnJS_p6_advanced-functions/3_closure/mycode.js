// 1
(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a);
  })(1);
})(0);   //0




// 2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();   //1 0




// 3
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
} //3 3 3




// 4
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `zopa - ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();  // жопа - 1 




// 5

let counter = 0;

function test() {
  console.log(++counter);
}

test();




// 6
let counter = 0;

function test() {
  console.log(++counter);
}

test();

function test2(cb) {
  let counter = 5;

  cb();
}

test2(test);  //1 2
 



// 7
function two() {
  console.log(a);
}

function one() {
  var a = 2;
  console.log(a);
  two();
}

var a = 1;
console.log(a);
one(); //  1/2/1
