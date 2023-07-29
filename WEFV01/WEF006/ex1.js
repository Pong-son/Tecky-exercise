let slideNo = 1
let title = {
  1: "The Party Of Your Life",
  2: "PLAYING YHE TRUMPET.EVERY FRIDAY @ JASSPLACE",
  3: "THAT WAS THE BEST PERFORMANCE EVER"
}
let menuOpen = false
document.querySelector('#menuBtn').addEventListener('click', () => {
  if (menuOpen) {
    document.querySelector('#navbarMenu').classList.add('closeMenu')
    document.querySelector('#navbarMenu').classList.remove('openMenu')
    document.querySelector('#mainContainer').classList.remove('opened')
    document.querySelector('#navbar').classList.remove('narbarOpen')
    document.querySelector('#navbar').classList.add('fixed-top')
    document.querySelector('.chooseitem').classList.remove('itemtoright')
    menuOpen = false
  } else {
    document.querySelector('#navbarMenu').classList.add('openMenu')
    document.querySelector('#navbarMenu').classList.remove('closeMenu')
    document.querySelector('#mainContainer').classList.add('opened')
    document.querySelector('#navbar').classList.add('narbarOpen')
    document.querySelector('#navbar').classList.remove('fixed-top')
    document.querySelector('.chooseitem').classList.add('itemtoright')
    menuOpen = true
  }
})
document.querySelector('#bn-1').checked = true
document.querySelector('.titleText').innerText = `${title[1]}`

document.querySelector('.r-banner').addEventListener('click',(e) => {
  if (e.target && e.target.matches('[name="banner"]')) {
    e.target.checked = true
    document.querySelector('#bannerImage').setAttribute('src',`./asset/${e.target.id}.jpg`)
    document.querySelector('.titleText').innerText = `${title[e.target.id.slice(3)]}`
    slideStop()
  }
})

function slider() {
  if (slideNo < 3) {
    slideNo++
  } else {
    slideNo = 1
  }
}
const slideStart = setInterval(() => {
    slider()
    document.querySelector('#bannerImage').setAttribute('src',`./asset/bn-${slideNo}.jpg`)
    document.querySelector('.titleText').innerText = `${title[slideNo]}`
    document.querySelector(`#bn-${slideNo}`).checked = true
  }
  ,5000)

function slideStop () {
  clearInterval(slideStart)
}


