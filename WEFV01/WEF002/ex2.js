const cards = [
  ['Spade', 'A'],
  ['Diamond', 'J'],
  ['Club', '3'],
  ['Heart', '6'],
  ['Spade', 'K'],
  ['Club', '2'],
  ['Heart', 'Q'],
  ['Spade', '6'],
  ['Heart', 'J'],
  ['Spade', '10'],
  ['Club', '4'],
  ['Diamond', 'Q'],
  ['Diamond', '3'],
  ['Heart', '4'],
  ['Club', '7']
];

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["Diamond", "Club", "Heart", "Spade"];

function compareCard(cardA, cardB) {
  const [suitA, rankA] = cardA;
  const [suitB, rankB] = cardB;
  const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB);
  if (ranksDiff !== 0) {
      return ranksDiff;
  } else {
      return suits.indexOf(suitA) - suits.indexOf(suitB);
  }
}

// Usage
compareCard(['Diamond', '3'], ['Spade', '5']); // -2
compareCard(['Diamond', '3'], ['Spade', '3']); // -3
compareCard(['Diamond', '3'], ['Diamond', '2']); // 1
compareCard(['Diamond', '3'], ['Diamond', '3']); //0

// Count the number of card which is of suit Spade. (Hints: using reduce)
const result = cards.reduce((count, curr) => {
  if(curr[0] === 'Spade'){
    count++
  } else {
    count
  }
  return count
},0)
console.log(result)

// Remove all the card that is smaller than ["Club", "3"].
const result2 = cards.filter(card => compareCard(["Club", "3"], card))
console.log(result2)

// Count the number of card which is of suit Diamond or Heart and with the rank larger than or equal to J.
const result3 = cards.reduce((count, curr) => {
  if(curr[0] === 'Diamond' || curr[0] === 'Heart'){
    if(ranks.indexOf(curr[1]) > 0 ){
      count++
    }
  } else {
    count
  }
  return count
},0)
console.log(result3)
// Replace all of the cards with suit Club to suit Diamond, keeping the same rank.
const newArr = []
const result4= cards.map(card => {
  if(card[0] === 'Club'){
    newArr.push(['Diamond',card[1]])
  } else {
    newArr.push(card)
  }
})
console.log(newArr)
// Replace all of the cards with rank A to rank 2. Keeping the same suit.
const newArr2 = []
const result5= cards.map(card => {
  if(card[1] === 'A'){
    newArr2.push([card[0],'2'])
  } else {
    newArr2.push(card)
  }
})
console.log(newArr2)