let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector("#main-title").textContent =
    "Welcome to Dom's homepage";
  // Part 2
  document.body.style.backgroundColor = "grey";
  // Part 3
  const list = document.getElementById("favorite-things");
  list.removeChild(list.lastElementChild);
  // Part 4
  const specialTitle = document.querySelectorAll(".special-title");
  specialTitle.forEach((element) => {
    element.style.fontSize = "2rem";
  });
  // Part 5
  const pastRaces = document.querySelectorAll("#past-races li");
  pastRaces.forEach((element) => {
    if (element.innerText === "Chicago") {
      element.remove();
    }
  });
  // Part 6
  const e = document.createElement("li");
  e.innerText = "New York";
  document.getElementById("past-races").appendChild(e);
  // Part 7
  const divNewYork = document.createElement("div");
  divNewYork.classList.add("blog-post", "purple");
  const h1NewYork = document.createElement("h1");
  h1NewYork.innerHTML = "New York";
  const pNewYork = document.createElement("p");
  pNewYork.innerText = "I RACED FOR MY FAMILY AND WON THEIR LOVE FOR ME";
  divNewYork.appendChild(h1NewYork);
  divNewYork.appendChild(pNewYork);
  document.querySelector(".main").appendChild(divNewYork);
};
