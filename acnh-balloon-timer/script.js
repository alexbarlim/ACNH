const b1 = document.querySelector('#balloon-1')
const b2 = document.querySelector('#balloon-2')
const map = document.querySelector('#map')

const move = () => {
  
  const now = Date.now() / 1000
  
  const t1 = now % (60 * 10)
  b1.setAttribute('transform', `translate(${t1 / 4} 0)`)
  
  const t2 = (now - 60 * 5) % (60 * 10)
  b2.setAttribute('transform', `translate(${t2 / 4} 0)`)
  
  window.requestAnimationFrame(move)
}

window.requestAnimationFrame(move)




const wind = document.querySelector('#wind')

wind.addEventListener('change', () => {
  map.style['transform'] = `scaleX(${(new FormData(wind)).get('wind')})`
})
