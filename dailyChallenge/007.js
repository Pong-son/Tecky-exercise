const choice = {
  firstBook: 4,
  secondBook: 4,
  thridBook: 4,
  forthBook: 2,
  fifthBook: 2,
}
let total = 0
let group = []

grouping()
cost()

function doubleCheck() {
  for (let i = 0; i < group.length; i++) {
    if (group[i].length === 5) {
      for (let j = i+1; j < group.length; j++) {
        if (group[j].length === 3) {
          let delArr = group[i].filter(x => !group[j].includes(x))
          let delItem = delArr?.pop()
          group[i] = group[i].filter(item => item !== delItem)
          group[j].push(delItem)
          j = group.length
        }
      }
    }
    if (group[i].length === 5) {
      for (let j = i+1; j < group.length; j++) {
        if (group[j].length === 5) {
          for (let k = i; k < group.length; k++) {
            if (group[k].length === 2) {
              let delArr1 = group[i].filter(x => !group[k].includes(x))
              let delItem1 = delArr1?.pop()
              group[i] = group[i].filter(item => item !== delItem1)
              group[k].push(delItem1)

              let delArr2 = group[j].filter(x => !group[k].includes(x))
              let delItem2 = delArr2?.pop()
              group[j] = group[j].filter(item => item !== delItem2)
              group[k].push(delItem2)
              j = group.length
              k = group.length
            }
          }
        }
      }
    }
  }
}
function grouping() {
  let max = 0
  for (let i = 0; i < 5; i++) {
    if(max < Object.values(choice)[i]) {
      max = Object.values(choice)[i]
    }
  }
  for (let i = 0; i < max; i++) {
    group.push([])
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < Object.values(choice)[i]; j++) {
      group[j].push(Object.keys(choice)[i])
    }
  }
  doubleCheck()
}
function cost() {
  let discount = 1
  for (let i = 0; i < group.length; i++) {
    if (group[i].length === 2) {
      discount = 0.95
    } else if (group[i].length === 3) {
      discount = 0.9
    } else if (group[i].length === 4) {
      discount = 0.8
    } else if (group[i].length === 5) {
      discount = 0.75
    }
    total += group[i].length * (8 * discount)
  }
}
console.log(group)

console.log(total)
