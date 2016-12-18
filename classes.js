// class constructor
function NBAPlayer(name, team, pos) {
  this.name = name;
  this.team = team;
  this.pos = pos;
}

/*
We want to add instance methods via prototype so that we don't recreate
these methods each time a new instance of NBAPlayer is created.
*/
//instance method:
NBAPlayer.prototype.dunk = function() {
  console.log(`${this.name} dunks`);
};


const curry = new NBAPlayer("Steph Curry", "Warriors", "guard");

//dunk isn't defined in the curry instance so JS works up the proto chain and finds dunk in the NBAPlayer prototype
curry.dunk(); //"Steph Curry dunks"

//__proto__ gives us access to the proto info (should not be used except for debugging)
curry.__proto__;
