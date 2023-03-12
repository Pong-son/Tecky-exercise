let leapYear = [1997,1996,1990,2000]
for(let i = 0; i < leapYear.length; i++) {
  if(leapYear[i] % 4 === 0){
    if( leapYear[i] % 100 === 0 && leapYear[i] % 400 !== 0){
      console.log(`${leapYear[i]} is not Leap Year`)
    } else {
      console.log(`${leapYear[i]} is Leap Year`)
    }
  } else {
    console.log(`${leapYear[i]} is not Leap Year`)
  }
}

