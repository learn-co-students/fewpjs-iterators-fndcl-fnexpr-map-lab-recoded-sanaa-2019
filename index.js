const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




let arr = tutorials.map(function(tuto) {
  return tuto.split(' ').map(function(tut) {
    return tut.replace(tut[0], tut[0].toUpperCase());
  }).join(' ');
});

function titleCased(){
  return arr;
}