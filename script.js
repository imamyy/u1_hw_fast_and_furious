let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)
  
  // Part 1
  document.getElementById('main-title').innerText = 'DOM Toretto';
  // Part 2
  document.body.style.backgroundColor = '#85a651';
  // Part 3
  const favThings = document.querySelectorAll('#favorite-things li')
  favThings[favThings.length - 1].remove()
  // Part 4
  const specTitle = document.querySelectorAll('.special-title')
  specTitle.forEach(element => {
    element.style.fontSize = '2rem'
  }) 

  // Part 5
  const pastRaces = document.querySelectorAll('#past-races li')
  pastRaces.forEach((element) => {
    if (element.innerText === 'Chicago'){
      element.remove()
    }
  })
  // Part 6
  const houston = document.createElement('li')
  houston.innerText = 'Houston'
  document.getElementById('past-races').appendChild(houston)
  // Part 7
  const divHouston = document.createElement('div')
  divHouston.classList.add('blog-post' , 'purple')
  

  const h1Houston = document.createElement('h1')
  h1Houston.innerHTML = 'Houston'
  const pHouston = document.createElement('p')
  pHouston.innerText = "I JUST RACE FOR FUN"
  divHouston.appendChild(h1Houston)
  divHouston.appendChild(pHouston)
  document.querySelector('.main').appendChild(divHouston)
  
}
