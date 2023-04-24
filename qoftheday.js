console.log("Q of the Day script is running!");

let bodyText = document.getElementById("bodyText");
let author = document.getElementById("author");

let newQuote = document.getElementById("newQuote")

async function fetchQuote() {

  let output = [];
  let random = Math.floor(Math.random() * 200) + 1;

  let input = await fetch('https://type.fit/api/quotes');
  let inputParsed = await input.json();

  console.log(inputParsed[random].text);
  console.log(inputParsed[random].author);

  bodyText.innerText = inputParsed[random].text;
  author.innerText = " - " + inputParsed[random].author;

}

fetchQuote();

newQuote.addEventListener("click", () => {
  fetchQuote();
})