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
  return tutorials.map(function(item){
    let arr = item.split(" ");
    let sent="";
    arr.map(function(item){
      sent+=item[0].toUpperCase()+item.slice(1)+" ";
    })
    return sent.slice(0,sent.length-1);
  })

}
console.log(titleCased());