console.log("hello main.js");

const CardMaker = {
  makeFrontMessage: function(coverMessage) {
    return `<h2>${coverMessage}</h2>`
  },
  makeInsideMessage: function(coverMessage) {
      return `<h2>${insideMessage}<h2>`
  }
}
console.log(CardMaker);

//Refactor this to link this object to cardMaker
const birthdayCard = Object.create(CardMaker);


// Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. Output two messages, one from the front and one from the inside of the card, to the console.

const anniversaryCard = Object.create(CardMaker);
const condolenceCard = Object.create(CardMaker);
const adultBday = Object.create(birthdayCard);

//add messages
birthdayCard.coverMessage = "Happy Birtday!! You're 39...";
birthdayCard.insideMessage = "It's not 40, but it is pretty close.";

anniversaryCard.coverMessage = "It's your anniversary...";
anniversaryCard.insideMessage = "Congratulations?";

condolenceCard.coverMessage = "You didn't get the job...";
condolenceCard.insideCover = "It's no surprise, but I am sorry.";

//construct card text content
let bday = birthdayCard.coverMessage + birthdayCard.insideMessage;

let anni = anniversaryCard.coverMessage + anniversaryCard.insideMessage;

let cond = condolenceCard.coverMessage + condolenceCard.insideMessage;

adultBday.coverMessage = "It's your birthday...";
adultBday.insideMessage = "Do you really need a card to feel special?";
let adBday = adultBday.coverMessage + adultBday.insideMessage;

document.getElementById("bday").innerHTML = bday;
document.getElementById("anni").innerHTML = anni;
document.getElementById("cond").innerHTML = cond;
document.getElementById("adultb").innerHTML = adBday;









