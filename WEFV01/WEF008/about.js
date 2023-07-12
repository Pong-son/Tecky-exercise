let modeColor = {
  dark:true,
  backgroundColor:'black'
}

document.querySelector('#viewMode').addEventListener('click',() => {
  if(modeColor.dark) {
    modeColor.dark = false
    // document.querySelector('#navBar').classList.remove('bg-black')
    // document.querySelector('#navBar').classList.add('bg-white')
    document.querySelector('body').classList.add('lightMode')
    document.querySelector('.btn-primary').classList.remove('btn-primary')
    document.querySelector('#startBtn').classList.remove('btn-primary')
    document.querySelector('#startBtn').classList.add('btn-light')
  } else {
    modeColor.dark = true
    // document.querySelector('#navBar').classList.remove('bg-white')
    // document.querySelector('#navBar').classList.add('bg-black')
    document.querySelector('body').classList.remove('lightMode')
    document.querySelector('#startBtn').classList.remove('btn-light')
    document.querySelector('#startBtn').classList.add('btn-primary')
  }
})