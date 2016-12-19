//Apply - called on a method: invokes the method on first arg w/ the other args as parameters
// "this" is obj (the first arg) in the example below
const obj1 = {
  name: "Earl Watts"
};

function greet(msg) {
  console.log(`${msg}: ${this.name}`);
}

greet.apply(obj1, ["Hello"]);


//Call - called on a method: invokes the method on first arg w/ the
//other args as parameters "this" is obj (the first arg) in the example below
const obj2 = {
  name: "Ben Goodman"
};

function greet(msg1, msg2) {
  console.log(`${msg1}: ${this.name}`);
  console.log(`${msg2}: ${this.name}`);
}

greet.call(obj2, "Hello", "Goodbye");

/*
Bind - we are passing the ageOneYear function as a callback and it is being
invoked "function-style" in the times function. Thus this is defined as
"window" or "global"
*/
function times(num, fun) {
  for (let i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

const cat = {
  age: 5,

  ageOneYear: function () {
    this.age += 1;
  }
};

cat.ageOneYear(); // works
console.log(cat.age);

times(10, cat.ageOneYear); // ReferenceError; this.age is not defined
console.log(cat.age);

times(10, cat.ageOneYear.bind(cat));  // works
console.log(cat.age);
