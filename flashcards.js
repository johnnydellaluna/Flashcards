var BasicCard = require("./basiccard.js");

var ClozeCard = require("./clozedelete.js");

var q1 = new BasicCard("Who is the director of films like Forrest Gump, Back to the Future, and Who Framed Roger Rabbit?", "Robert Zemeckis");
var q2 = new BasicCard("Robert Zemeckis won an Oscar for which category on Forrest Gump?", "Best Director");
var q3 = new BasicCard("According to Zemeckis, are hoverboards from Back to the Future real?", "Yes");
var q4 = new BasicCard("What Christmas film by Zemeckis followed The Polar Express' release?", "A Christmas Carol");
var q5 = new BasicCard("Zemeckis collaborated with who to start work on Who Framed Roger Rabbit?", "Steven Spielberg");

console.log(q1.front);
console.log(q1.back);
console.log(q2.front);
console.log(q2.back);
console.log(q3.front);
console.log(q3.back);
console.log(q4.front);
console.log(q4.back);
console.log(q5.front);
console.log(q5.back);


var q6 = new ClozeCard();
var q7 = new ClozeCard();
var q8 = new ClozeCard();
var q9 = new ClozeCard();
var q10 = new ClozeCard();

