const createPlayer = function(){
  let point = 0
  return {
    win: function(cards){
      let i = 0
      while (i < cards?.length) {
        point += cards[i]
        i++
      }
      return point
    },
    score: function() {
      return point
    }
  }
}
let alex = createPlayer();
let gordon = createPlayer();

alex.win([1, 2, 9, 8])
alex.win([3]);
gordon.win([4, 4, 9])
alex.win([0, 0, 0, 1, 3]);
gordon.win([2, 2, 4, 5, 6, 6, 7, 8]);

console.log(`Alex's score: ${alex.score()}`);
console.log(`Gordon's score: ${gordon.score()}`);