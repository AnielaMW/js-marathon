// YOUR CODE GOES HERE
function launchpad(ship){
  console.log("Preflight Procedures Initialized\n" +
  "Preparing " + ship.name)
};

function Ship(name){
  this.name = name
};

var ourShip = new Ship("T.A.R.D.I.S.")

var crewNames = ["The Doctor",
  "Rose Tyler",
  "Martha Jones",
  "Donna Noble",
  "River Song (aka Melody Pond)",
  "Captain Jack Harkness",
  "Amy Pond",
  "Rory Williams-Pond",
  "Clara Oswald",
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

launchpad(ourShip)
