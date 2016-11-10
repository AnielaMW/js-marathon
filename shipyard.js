// YOUR CODE GOES HERE
function launchpad(ship, crew, rocket){
  console.log("Preflight Procedures Initialized\n" +
  "Preparing " + ship.name);
  ship.loadCrew(crew);
  console.log(ship.captain() + " to Command Voyage");
  ship.mountPropulsion(rocket);
  ship.takeoff(rocket);
  rocket.addFuel(10);
  ship.takeoff(rocket);
};

function Ship(name){
  this.name = name
  this.crew = []
  this.propulsion = null

  this.loadCrew = function(arr){
    var crew = []
    arr.forEach(function(person){
      crew.push(person);
      console.log(" - " + person.name + " is aboard.")
    });
    return this.crew = crew
  };

  this.captain = function(){
    var capt_i = Math.floor(Math.random() * this.crew.length);
    return this.crew[capt_i].name
  };

  this.mountPropulsion = function(object){
    console.log(" - Propulsion mounted")
    return object
  };

  this.takeoff = function(object){
    if (object.fire()){
      console.log("   WHEEOOOOSHHHHHFWOOO WHEEOOOOOSHHHHHFWOOOO")
    }
    else {
      console.log(" - Takeoff was unsuccessful")
    };
  };
};

var ourShip = new Ship("T.A.R.D.I.S.")

var crewNames = ["The Doctor",
  // "Rose Tyler",
  // "Martha Jones",
  // "Donna Noble",
  "River Song (aka Melody Pond)",
  "Captain Jack Harkness",
  // "Amy Pond",
  // "Rory Williams-Pond",
  // "Clara Oswald",
  "Ashildr (aka Me)"
]

function CrewMember(name){
  this.name = name
  this.trained = false
};

var crewMembers = trainCrew(crewNames)

function trainCrew(crewArr){
  var members = []
  for (var i = 0; i < crewArr.length; i++){
     members.push(new CrewMember(crewArr[i]))
     members[i].trained = true
  };
  return members
};

var rocket = {
  fuel: 0,

  addFuel: function(num){
    this.fuel += num
    console.log(" - Fuel Level: " + this.fuel)
  },

  fire: function(){
    if (this.fuel > 0){
      this.fuel -= 1
      console.log(" - Rockets Fired\n" +
      " - Fuel Level: " + this.fuel)
      return true
    }
    else {
      console.log(" - Rockets Failed to Fire")
      return false
    }
  },
};

launchpad(ourShip, crewMembers, rocket)
