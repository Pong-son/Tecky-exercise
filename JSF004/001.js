const dateFns = require('date-fns')
const readlineSync = require('readline-sync')
const add = require('date-fns/add')

const keyDate = readlineSync.question('Enter the key date:')
const formatKeyDate = Date.parse(keyDate)
// const test = add(formatKeyDate,{days:100})
console.log(typeof Date.parse(keyDate))
console.log(`100-day celebration: ${dateFns.format(add(formatKeyDate,{days:100}),'yyyy-MM-dd')}`)
console.log(`100-month celebration: ${dateFns.format(add(formatKeyDate,{months:100}),'yyyy-MM-dd')}`)
console.log(`10000000-second celebration: ${dateFns.format(add(formatKeyDate,{seconds:10000000}),'yyyy-MM-dd')}`)