const quotations = [
  "Life is like a box of chocolates, you never know what your going to get1",
  "If you aint first your last",
  "Esketit"
];

const randomIndex = Math.floor(Math.random() * quotations.length);
const selectedQuotation = quotations[randomIndex];

console.log(selectedQuotation);