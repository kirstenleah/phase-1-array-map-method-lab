const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map(word => {
//     const firstChar = word.split(" ");
//     const capitalChar = firstChar.map(
//       word => word.charAt(0).toUpperCase() + word.slice(1)
//     );
//     const capTut = capitalChar.join(" ");
//     return capTut;
//   });
// };


const titleCased = () => {
  return tutorials.map(cat => {
    const byeBye = cat.split(" ")
    const costumes = byeBye.map(
      cat => cat.charAt(0).toUpperCase() + cat.slice(1)
    )
    const suits = costumes.join(" ")
    return suits
  })
}
