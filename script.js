const main = document.querySelector("main");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      const quote = document.querySelector("#quote");
      quote.innerText = data.data[0].quoteText;

      const author = document.querySelector("#author");
      author.innerText = "-" + data.data[0].quoteAuthor;
    });
});
