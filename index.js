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

   return tutorials.map( title =>{
  let arr =title.split(" ")

      let b = []
      let e = []
      arr.forEach(index => {let r =index.slice(0,1); 
      
      let c = index.replace(index.charAt(0), index.charAt(0).toUpperCase())
    
      b.push(c.replace(",", " "))

      })//end map
      e.push( b.join(" "))

      return e[0];
    })
    
}


console.log(titleCased());

