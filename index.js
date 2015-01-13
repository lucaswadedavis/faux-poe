var Chance=require("chance");

var fauxPoe=function(seed){
  var c = seed ? new Chance(seed) : new Chance();
  var nouns=[
    "maiden",
    "mountain",
    "river",
    "shore",
    "wall",
    "heath",
    "moore",
    "wood",
    "manse",
    "fever",
    "heart",
    "love",
    "night",
    "bosom",
    "star"
    ];
  var adjectives=[
    "broken",
    "torn",
    "wandering",
    "forelorn"
    ];
  var d="";
  d+="In the valley of the "+c.pick(nouns)+", "+c.pick(adjectives)+"\n";
  d+="A "+c.pick(adjectives)+" silence in the first epoch.";
  return d;
};

console.log( fauxPoe() );
console.log((new Chance() ).first({gender:''}) );