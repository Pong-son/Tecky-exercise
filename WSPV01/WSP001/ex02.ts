import { type } from "os";

// 1. The following findFactors function.
function findFactors(num:number):number[]{
  let factors:number[] = [];
  for(let factor = 2; factor <= num / 2 ; factor++){
      if(num % factor === 0){
         factors.push(factor);
      }
  }
  return factors;
}
// 2. This LeapYear function

function leapYear(year:number):boolean{
   if (year % 400 === 0) {
       console.log("Leap Year");
       return true;
   } else if (year % 100 === 0) {
       console.log("Not a Leap Year");
       return false;
   } else if (year % 4 === 0) {
       console.log("Leap Year");
       return true;
   } else {
       console.log("Not a Leap Year");
       return false;
   }
}
// 3. This RNATranscription function

function rnaTranscription(dna:string):string{
   let rna = "";
   for(let nucleotide of dna){
       switch(nucleotide){
           case "G":
               rna+= "C";
               break;
           case "C":
               rna+= "G";
               break;
           case "T":
               rna+= "A";
               break;
           case "A":
               rna+= "U";
               break;
           default:
               throw new Error(`The nucleotide ${nucleotide} does not exist`)
       }
   }
   return rna;
}
// 4. The factorial recursive function.

function factorial(number:number):number{
  if(number === 0 || number === 1){
     return 1;
  }

  return factorial(number - 1) * number
}
// 5. The type of the following object
type Person = {
  name: string,
  age: number,
  students: {
    name:string,
    age:number,
    exercises?:{
      score:number,
      date:Date
    }[]
  }[]
}
const peter:Person = {
 name: "Peter",
 age: 50,
 students:[
    { name:"Andy", age:20},
    { name:"Bob", age:23},
    {name: "Charlie", age:25 , exercises:[
        { score: 60 , date: new Date("2019-01-05") }
      ]}
 ]
}
// 6. The setTimeout callback function

const timeoutHandler:()=>void = ()=>{
    console.log("Timeout happens!");
}

const timeout:number = 1000;

setTimeout(timeoutHandler,timeout);

// 7. The type of the variable of someValue
const someValue:number|null = Math.random() > 0.5? 12: null;
