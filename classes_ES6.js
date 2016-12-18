//ES6 just uses syntactic sugar to accomplish this
class Bicycle {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }


  action() {
    return "rolls along";
  }

  ride() {
    console.log(
      `The ${this.color} ${this.model}
      goes "whoosh" and ${this.action()}!`
      );
  }

  //mimics ruby's class methods
  static parade() {
    Bicycle.funBicycles.forEach(bike => bike.ride());
  }
}

const cruiser = new Bicycle("Schwinn", "turquoise");
const salsaFargo = new Bicycle("Salsa Fargo", "burnt orange");
const flyingMerkel = new Bicycle("Flying Merkel", "green");
const bianchiVolpe = new Bicycle("Bianchi Volpe", "slate blue");

Bicycle.funBicycles = [cruiser, salsaFargo, flyingMerkel, bianchiVolpe];

Bicycle.parade();

// The turquoise Schwinn goes "whoosh" and rolls along!
// The burnt orange Salsa Fargo goes "whoosh" and rolls along!
// The green Flying Merkel goes "whoosh" and rolls along!
// The slate blue Bianci Volpe goes "whoosh" and rolls along!
