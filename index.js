// your code 
const holes = document.getElementsByClassName('hole')

let score = 0
const gameArea = document.getElementById('hit-a-mole');
gameArea.addEventListener('click', function (clickEvent) {
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    holes[randomHoleIndex].classList.add("mole")
  if (clickEvent.target.matches('.mole')) {
    // we hit a mole!
    score++;
    document.querySelector('h2').innerHTML = score
    
    clickEvent.target.classList.remove("mole")
    holes[randomHoleIndex].classList.add("mole")
    
  }
  
});
