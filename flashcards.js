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


var q6 = new ClozeCard("Michael Crichton is the author of Jurassic Park", "Michael Crichton");
var q7 = new ClozeCard("Joshua Gunn is the author of Speech Craft", "Joshua Gunn");
var q8 = new ClozeCard("Elizabeth Wardle is the author of Writing About Writing", "Elizabeth Wardle");
var q9 = new ClozeCard("Stephen King is the author of It", "Stephen King");
var q10 = new ClozeCard("Fran Lebowitz is the author of Social Studies", "Fran Lebowitz");

console.log(q6.text);
console.log(q6.cloze);
console.log(q6.partial);
console.log(q7.text);
console.log(q7.cloze);
console.log(q7.partial);
console.log(q8.text);
console.log(q8.cloze);
console.log(q8.partial);
console.log(q9.text);
console.log(q9.cloze);
console.log(q9.partial);
console.log(q10.text);
console.log(q10.cloze);
console.log(q10.partial);


