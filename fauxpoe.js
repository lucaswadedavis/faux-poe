var fauxPoe=function(seed){
  var c = seed ? new Chance(seed) : new Chance();
  
  var maybe=function(likelihood,a,b){
    return Math.random()<likelihood ? a : (b || "") ;    
  };
  
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
    "dream",
    "star",
    "locket",
    "route",
    "path",
    "road",
    "hall",
    "stranger",
    "winter",
    "stage",
    "season",
    "ring"
    ];
  var adjectives=[
    "abandoned",
    "afraid",
    "aweful",
    "great",
    "beautiful",
    "black",
    "red",
    "white",
    "pale",
    "iron",
    "empty",
    "broken",
    "wandering",
    "lost",
    "beloved"
    ];
  
  var articles=[
    "the",
    "that",
    "their",
    "her",
    "our",
    "my"
    ];
    
  //past-tense single
  var verbs=[
    "was",
    "wandered",
    "stalked",
    "hid",
    "lied",
    "wondered",
    "dreamed",
    "breathed",
    "dwelt",
    "slept"
    ];  
  
  var rhymingAdjectives=[
    ["torn","forelorn"],
    ["cold","old"],
    ["tall","small"],
    ["vast","fast"],
    ["sleeping","keeping"],
    ["fled","bled"],
    ["forgotten","begotten"]
    ];
    
  var rhymingNouns=[
    ["tomb","room"],
    ["place","space"],
    ["hell","bell"],
    ["ghost","host"],
    ["fire","pyre"],
    ["king","ring"],
    ["fate","gate"],
    ["castle","vassal"]
    ];

    
    var phrases=[
      "in the valley of",
      "in",
      "upon",
      "on",
      "with",
      "by",
      "beside",
      "within",
      "beneath"
      ];
    
  var pPhrase=function(){
    return c.pick(phrases)+" "+c.pick(articles)+" "+c.pick(nouns);
  };
  var d="";
  
  var oddLine=function(){
    return (c.first({gender:'female'})+" "+c.pick(adjectives)+" "+c.pick(adjectives)+".");
  }
  
  var couplet=function(){
    var rhyme=c.pick(rhymingAdjectives);
    var d=[];
    d.push(pPhrase()+" was a "+c.pick(nouns)+", "+c.pick(adjectives)+" and "+rhyme[0]);
    d.push(pPhrase()+" "+c.pick(verbs)+" "+c.pick(articles)+" "+c.pick(nouns)+", so "+rhyme[1]);
    return d;
  };
  
  var personalCouplet=function(){
    var rhyme=c.pick(rhymingNouns);
    var d=[];
    var l1="";
    l1+=c.first({gender:'female'});
    l1+=" "+c.pick(verbs)+" "+pPhrase();
    l1+=maybe(0.1," "+c.pick(phrases) );
    l1+=maybe(0.9," "+c.pick(articles));
    l1+=maybe(0.1," "+c.pick(adjectives) );
    l1+=" "+rhyme[0];
    d.push(l1);
    d.push(pPhrase()+", "+c.pick(verbs)+" "+c.pick(articles)+" "+c.pick(adjectives)+" "+c.pick(adjectives)+" "+rhyme[1]);
    return d;
  };
  
  var combineLines=function(l1,l2){
    l1[0]=l1[0][0].toUpperCase()+(l1[0]).substring(1);
    
    l1[1]=l1[1][0].toUpperCase()+(l1[1]).substring(1);
    
    l2[0]=l2[0][0].toUpperCase()+(l2[0]).substring(1);
    
    l2[1]=l2[1][0].toUpperCase()+(l2[1]).substring(1);
    
    return l1[0]+",<br>"+l2[0]+",<br>"+l1[1]+",<br>"+l2[1]+".";
  };
  
  d+=combineLines(couplet(), personalCouplet() );
  return d;
};
