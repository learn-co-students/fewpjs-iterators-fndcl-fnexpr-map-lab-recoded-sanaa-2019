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

const titleCased = () => {
  const tut= tutorials.map(titlecase=>titlecase.split(' ').map(item=>{
  return item.charAt(0).toUpperCase() + item.substr(1)}).join(' '));
 return tut;
}
// console.log(titleCased(tutorials));

// let tut=[]
// tut=tutorials.toLowerCase().split("");
// const titleCased=tut.map(w =>
// {w.replace(w.charAt(0),w.charAt(0).toUpperCase())})
//   .join(" ") ;
// console.log(titleCased(tutorials));