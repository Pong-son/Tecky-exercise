let arr = []
arr.push({Name:"Peter",Height:175,Hobbies:['Football', 'Basketball']})
arr.push({Name:"John",Height:180,Hobbies:['Basketball', 'Sleeping']})
arr.push({Name:"Betty",Height:170,Hobbies:['Reading']})
arr.push({Name:"Mary",Height:160,Hobbies:['Eating', 'Sleeping', 'Reading']})

console.log(arr)
let i = 0
while (i < arr.length) {
  if (arr[i].Height > 170) {
    console.log(arr[i].Name)
  }
  i++
}