var Twists = [
  { Number: "Question1",
    Question: "What room has no doors, no windows and no floors?",
Answer: "Mushroom",
Tip: "Which word contains 'room' but not means room?",
Warmtip:"Tip: each answer is a word. Don't forget the first letter of the answer should be capitalized."},
{ Number: "Question2",
  Question: "What can hear you without ears and can answer you without a mouth?",
Answer: "Echo",
Tip: "When you shout in a mountain valley, what can you hear?(The first letter of the answer is E.)",
Warmtip:"Tip: each answer is a word. Don't forget the first letter of the answer should be capitalized."},
{Number: "Question3",
Question: "What 5-letter word has 6 left when you take 2 letters away?",
Answer: "Sixty",
Tip: "6 = six~",
Warmtip:"Tip: each answer is a word. Don't forget the first letter of the answer should be capitalized."},
{Number: "Question4",
Question: "What starts with a T, ends with a T, and full of T?",
Answer: "Teapot",
Tip: "Tea shares a same pronounce with T.",
Warmtip:"Tip: each answer is a word. Don't forget the first letter of the answer should be capitalized."},
{Number: "Question5",
Question: "What animal has a head like a cat, eyes like a cat, a tail like a cat, but isn't a cat?",
Answer: "Kitten",
Tip: "Hello Kitty~",
Warmtip:"Tip: each answer is a word. Don't forget the first letter of the answer should be capitalized."},
{Number:"Finish!!",
Question: " ",
Answer: " ",
Tip: " ",
Warmtip:" "}
];
var C = 0
var Score = 0

var name = prompt("What is your name??");
alert("Hello, " + name + ", let's go!!")

function typeAnswer(){
  var response = prompt("Please type your answer below~");
  if (response === Twists[C].Answer){
    if (confirm("right!")){
      C++
      var x = document.getElementById('demo');
      x.innerHTML = Twists[C].Question;
      var y = document.getElementById('number');
      y.innerHTML = Twists[C].Number;
      Score++
      var z = document.getElementById('score');
      z.innerHTML = "Score = " + Score;
      var a = document.getElementById('Warmtip');
      a.innerHTML = Twists[C].Warmtip;}
  }
  else{
    alert("Sorry, your answer is wrong, please try again!");
  }
}

 function Tips(){
   alert(Twists[C].Tip);
}

function showPrevious(){
  if (C>0){
    C--
  }
  else{
    C=0
  }
  var x = document.getElementById('demo');
  x.innerHTML = Twists[C].Question;
  var y = document.getElementById('number');
  y.innerHTML = Twists[C].Number;
}

function showAnswer(){
  alert(Twists[C].Answer);
}

function showNext(){
  C++
  var x = document.getElementById('demo');
  x.innerHTML = Twists[C].Question;
  var y = document.getElementById('number');
  y.innerHTML = Twists[C].Number;
  var a = document.getElementById('Warmtip');
  a.innerHTML = Twists[C].Warmtip;
}

function ESC(){
if (confirm("See you next time, goodbye!")){
  window.close();
 }
}
