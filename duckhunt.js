window.onload = function () {
  const body = document.body;  
  console.log(body)

  function createDuck () {
  let liveDuck = document.createElement('div')
  liveDuck.setAttribute('class', 'duck') 
  body.appendChild(liveDuck)
  randomPosition(liveDuck)
  
  liveDuck.addEventListener('click', () => {
    liveDuck.classList.add('shot')
    setTimeout( () => {
      body.removeChild(liveDuck)
  }, 2000)
})
  
//toggleFlap killed you here! Remember this part! Variable name must match toggle('flap')
  const toggleFlap = function() {
    liveDuck.classList.toggle('flap')
  }
    setInterval( () => {
      toggleFlap()
    }, 250)


  function randomPosition(liveDuck) {
  liveDuck.style.left = Math.random() * window.innerWidth + "px"
  liveDuck.style.top = Math.random() * window.innerHeight + "px"
  }

  function moveDuck(liveDuck) {
    liveDuck.style.left = Math.random() * window.innerWidth + "px"
    liveDuck.style.top = Math.random() * window.innerHeight + "px" 
  }
  setInterval( () => {
    moveDuck(liveDuck)
  }, 1000)
}

  
for(let i=0; i<5; i++) {
  createDuck()
}
function checkForWinner() {
  let ducks = body.querySelectorAll('.duck')
  if (ducks.length === 0) {
    alert('You Win! Congratulations!')
  }
}
setInterval(() => {
  checkForWinner()
}, 1000)
}
