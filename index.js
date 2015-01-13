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
  var pPhrase=function(){
    var phrases=[
      "in the valley of the",
      "in the",
      "upon the",
      "on the",
      "with the",
      "by the",
      "beside the",
      "within the",
      "beneath the"
      ]
    return c.pick(phrases)+" "+c.pick(nouns);
  };
  var d="";
  
  var couplet=function(){
    var d=[];
    d.push(pPhrase()+" was a "+c.pick(nouns)+", "+c.pick(adjectives));
    d.push(c.first({gender:'female'})+" "+c.pick(adjectives)+" "+c.pick(adjectives)+".");
    return d;
  };
  var combineLines=function(l1,l2){
    return l1[0]+"\n"+l2[0]+"\n"+l1[1]+"\n"+l2[1];
  };
  d+=combineLines(couplet(), couplet() );
  return d;
};

console.log( fauxPoe() );