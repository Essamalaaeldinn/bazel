const arrayOfQuotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Charles M. Schulz",
    quote:
      "All you need is love. But a little chocolate now and then doesn't hurt.",
  },
  {
    author: "Desiderius Erasmus Roterodamus",
    quote:
      "When I have a little money, I buy books; and if I have any left, I buy food and clothes.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
];

var lastRandomIndex = null;

function generateQuote() {
  var randomIndex;
  randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);

  if (randomIndex === lastRandomIndex) {
    randomIndex = (randomIndex + 1) % arrayOfQuotes.length;
  }

  lastRandomIndex = randomIndex;

  document.querySelector(
    "#quoteOutput"
  ).textContent = `\"${arrayOfQuotes[randomIndex].quote}\"`;
  document.querySelector(
    "#authorOutput"
  ).textContent = `--${arrayOfQuotes[randomIndex].author}`;
}
