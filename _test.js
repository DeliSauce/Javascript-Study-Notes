class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(`${this.name} says meow`);
  }
  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Function.prototype.myBind1 = function(context) {
  return () => {return this.apply(context);};
};

markov.meow.myBind1(markov)();

markov.says.bind(breakfast,"a", "b")();
markov.says.bind(breakfast)("a", "b");


Function.prototype.myBind = function(context, ...aArgs) {
  return (...bArgs) => {
    return this.apply(context, aArgs.concat(bArgs));
  };
};


markov.says.myBind(breakfast,"a", "b")();
markov.says.myBind(breakfast)("a", "b");


// write Function.prototype.inherits.
Function.prototype.inherits = function(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
