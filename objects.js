
// object literals (similar to a hash in ruby)
const objLit = {
  name: "peter",
  sex: "M",
  age: 36,
  addYear: function () {
    this.age += 1;
  }
};

//access properties 2 ways (dot and bracket)
objLit.name;
objLit['name'];

objLit.addYear(); //objLit.age is now 37
