interface Attack{
  damage:number
}

class BowAndArrow implements Attack{
  //Bow and Arrow Attack here
  damage:number
  constructor(damage:number) {
    this.damage = damage
  }
}

class ThrowingSpear implements Attack{
  // Throwing Spear Attack here
  damage:number
  constructor(damage:number) {
    this.damage = damage
  }
}


interface Player2{
  attack(monster:Monster2): void;
  switchAttack(): void;
  gainExperience(exp:number): void;
}

class Amazon implements Player2{
  private primary: Attack;
  private secondary: Attack;
  private usePrimaryAttack: boolean;
  constructor(){
    this.primary = new BowAndArrow(30);
    this.secondary = new ThrowingSpear(40);
    // TODO: set the default value of usePrimaryAttack
    this.usePrimaryAttack = true
  }

  attack(monster:Monster2):void{
    let countAttack = 1
    while(monster.hp > 0) {
      if(this.usePrimaryAttack && countAttack < 4){
        // TODO: use primary attack
        // console.log(this.primary)
        let attackByAmazon:number = this.primary.damage
        monster.injure(attackByAmazon)
        console.log("player attacks a monster (HP:"+monster.hp+") [PrimaryAttack]")
        console.log(countAttack)
        if(countAttack < 4) {
          countAttack++
        } else {
          countAttack = 1
          this.usePrimaryAttack = false
        }
      } else {
        // TODO: use secondary attack
        let attackByAmazon:number = this.secondary.damage
        monster.injure(attackByAmazon)
        console.log("player attacks a monster (HP:"+monster.hp+") [SecondaryAttack]")
        countAttack = 1
        this.usePrimaryAttack = true
      }
    }
  }
  switchAttack():void{
    // TODO: Change the attack mode for this player

  }

  gainExperience(exp:number): void {
  }
  //.. The remaining methods.
}

class Monster2{
// You can use the `Monster` before
  public hp:number
  constructor(){
    this.hp = Math.ceil(Math.random()*500)
  }
  injure(damage:any){
    this.hp = this.hp - Number(damage)
  }
}

const player2 = new Amazon();
const monster2 = new Monster2();
console.log(monster2.hp)
player2.attack(monster2)