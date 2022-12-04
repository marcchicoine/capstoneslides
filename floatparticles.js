// Some random colors
const colors = ['#DF425C', '#FE604C', '#FFA775', '#FFA775', '#4C7FE3']

const numBalls = 100
const balls = []

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement('div')
  ball.classList.add('ball')
  ball.style.background = colors[Math.floor(Math.random() * colors.length)]
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`
  ball.style.top = `${Math.floor(Math.random() * 1000)}vh`
  ball.style.transform = `scale(${Math.random()})`
  ball.style.width = `${Math.random()}em`
  ball.style.height = ball.style.width

  balls.push(ball)
  document.body.append(ball)
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  }

  let anim = el.animate(
    [{transform: 'translate(0, 0)'}, {transform: `translate(${to.x}rem, ${to.y}rem)`}],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: 'alternate',
      fill: 'both',
      iterations: Infinity,
      easing: 'ease-in-out'
    }
  )
})
