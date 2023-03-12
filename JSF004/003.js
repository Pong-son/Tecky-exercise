const data = {
  "waitTime":[
    {"hospName":"Alice Ho Miu Ling Nethersole Hospital","topWait":"Over 2 hours"},
    {"hospName":"Caritas Medical Centre","topWait":"Over 1 hour"},
    {"hospName":"Kwong Wah Hospital","topWait":"Over 3 hours"},
    {"hospName":"North District Hospital","topWait":"Around 1 hour"},
    {"hospName":"North Lantau Hospital","topWait":"Around 1 hour"},
    {"hospName":"Princess Margaret Hospital","topWait":"Over 1 hour"},
    {"hospName":"Pok Oi Hospital","topWait":"Over 2 hours"},
    {"hospName":"Prince of Wales Hospital","topWait":"Over 1 hour"},
    {"hospName":"Pamela Youde Nethersole Eastern Hospital","topWait":"Over 1 hour"},
    {"hospName":"Queen Elizabeth Hospital","topWait":"Over 2 hours"},
    {"hospName":"Queen Mary Hospital","topWait":"Over 2 hours"},
    {"hospName":"Ruttonjee Hospital","topWait":"Over 3 hours"},
    {"hospName":"St John Hospital","topWait":"Around 1 hour"},
    {"hospName":"Tseung Kwan O Hospital","topWait":"Over 2 hours"},
    {"hospName":"Tuen Mun Hospital","topWait":"Over 3 hours"},
    {"hospName":"Tin Shui Wai Hospital","topWait":"Around 1 hour"},
    {"hospName":"United Christian Hospital","topWait":"Over 5 hours"},
    {"hospName":"Yan Chai Hospital","topWait":"Over 2 hours"}
  ],
  "updateTime":"9/3/2020 6:30pm"
}
let i = 0
let toWaitArr = []
while (i < data.waitTime.length) {
  waitTime = data.waitTime[i]["topWait"].split(' ')
  toWaitArr.push(parseInt(waitTime[1]))
  i++
}

console.log(toWaitArr.reduce((prev, curr) => curr = curr + prev)/data.waitTime.length)