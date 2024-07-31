import fs from "fs";

let listAllJs = async (path: string):Promise<any> => {
  let print:string[] = await fs.promises.readdir(path)
  for await (const address of print) {console.log(address)}
};

listAllJs('C:\\Users\\L\\Desktop\\Tecky-exercise\\WSPV01\\');