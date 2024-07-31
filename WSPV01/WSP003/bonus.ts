import fs from 'fs';
import papa from 'papaparse';
import readline from 'readline';

// 1
// function setTimePromise (callback: ()=>any) {
//     return new Promise<void> ((resolve, reject) => {
//         try {
//             setTimeout( function() {
//                 callback()
//                 resolve()
//             }, 1000);
//         } catch (err) {
//             reject(err)
//         }
//     })
// }

// (async () => {
//     const callback = () => console.log("test");
//     await setTimePromise(callback);
//     console.log("done");
// })()

//  setTimePromise () => {
//     await 
// }




// 2
const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function readLIPromise () {
    return new Promise <string> ((resolve, reject) => {
        try {
            readLineInterface.question("What is your name?",(answer:string)=>{
                resolve(answer)
                readLineInterface.close();
            })
            
        } catch (err) {
            reject(err)
        };
    })
};



(async () => {
    const name = await readLIPromise()
    console.log(`Your name is ${name}`);
})()


// 3
function cRSPromise () {
    return new Promise <papa.ParseResult<unknown>> ((resolve, reject) => {
        try {
            const file = fs.createReadStream('anycsv.csv');
            papa.parse(file, {
                worker: true, // Don't bog down the main thread if its a big file
                complete: function(results, file) {
                    resolve(results)  
                }
            });
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}

(async () => {
    const result = await cRSPromise()
    console.log(result)
})()