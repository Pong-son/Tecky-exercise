import fs from "fs";

let listAllJsRecursive = async (path: string):Promise<any> => {
  let print:string[] = await fs.promises.readdir(path)
  for  (const address of print) {
    let files: string[] = await fs.promises.readdir(path + address)
    for await (const file of files) {
      console.log(file)
    }
  }
};

listAllJsRecursive('C:\\Users\\L\\Desktop\\Tecky-exercise\\WSPV01\\');