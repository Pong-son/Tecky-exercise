// Declaration of Class and its methods
class Player{
  private strength:number;
  private name:string;
  protected exp:number
  constructor(strength:number,name:string){
    this.strength  = strength;
    this.name = name;
    this.exp = 0
  }

  attack(monster:Monster){
    while(monster.hp > 0) {
      if(Math.floor(Math.random()*2)) {
        let damage:number = (this.strength+Math.floor(this.exp/50))*2
        console.log(damage)
        monster.injure(damage)
        console.log("player "+this.name+" attacks a monster (HP:"+monster.hp+") [Critical]")
      } else {
        let damage = this.strength+Math.floor(this.exp/50)
        console.log(damage)
        monster.injure(damage)
        console.log("player "+this.name+" attacks a monster (HP:"+monster.hp+")")
      }
    }
    console.log("Monster dead!")
    this.gainExperience(monster.exp)
    monster.born(monster)
  }

  gainExperience(exp:number){
    this.exp += monster.exp
  }

}

class Monster{
  // Think of how to write injure
  public hp:number
  public exp:number
  constructor(){
    this.hp = Math.ceil(Math.random()*100)
    this.exp = 5
  }
  injure(damage:number){
    this.hp = this.hp - damage
  }
  born(monster:Monster){
    this.hp = Math.ceil(Math.random()*100)
    player.attack(monster)
  }
}


// Invocations of the class and its methods
const player = new Player(20,'Peter');
const monster = new Monster();
console.log(monster.hp)
player.attack(monster);
// English counterpart: Player attacks monster