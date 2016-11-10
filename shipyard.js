// YOUR CODE GOES HERE
function launchpad(ship){
  console.log("Preflight Procedures Initialized\n" +
  "Preparing " + ship.name)
};

function Ship(name){
  this.name = name
};

var ourShip = new Ship("T.A.R.D.I.S.")

launchpad(ourShip)
