let slideNo = 1
let silderFns
let title = {
  1: "<div>The Party Of Your Life</div><div>Read more</div>",
  2: "<div>PLAYING YHE TRUMPET.EVERY FRIDAY @ JASSPLACE</div><div>Read more</div>" ,
  3: "<div>THAT WAS THE BEST PERFORMANCE EVER</div><div>Read more</div>"
}

document.querySelector('#bn-1').checked = true
document.querySelector('#banner').innerHTML = `<img src="./asset/bn-${slideNo}.jpg" alt=${slideNo}></img><span class="titleOfBanner">${title[slideNo]}</span>`

slideStart()

document.querySelector('.r-banner').addEventListener('click',(e) => {
  if (e.target && e.target.matches('[name="banner"]')) {
    e.target.checked = true
    document.querySelector('#banner').innerHTML = `<img src="./asset/${e.target.id}.jpg" alt=${e.target.id}></img><span class="titleOfBanner">${title[e.target.id.slice(3)]}</span>`
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
function slideStart () {
  silderFns = setInterval(() => {
    slider()
    document.querySelector('#banner').innerHTML = `<img src="./asset/bn-${slideNo}.jpg" alt=${slideNo}></img><span class="titleOfBanner">${title[slideNo]}</span>`
    document.querySelector(`#bn-${slideNo}`).checked = true
  }
  ,5000)
}
function slideStop () {
  clearInterval(silderFns)
}


