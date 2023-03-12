const readlineSync = require('readline-sync')
const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname,'toDoList.txt'),'utf-8')
const dataArr = data.split('\n')
const action = readlineSync.question(`${data}\nIf you want to add a task, type `+`. If you want to clear a task, type the number (1-${dataArr.length}): `)
if(action === '+') {
  const newTask = readlineSync.question('What task is it? ')
  dataArr.push(`\[${dataArr.length + 1}\] ${newTask}`)
  fs.writeFileSync(path.join(__dirname,'toDoList.txt'),dataArr.join('\n')) 
} else if (action != null) {
  let newArr = []
  dataArr.filter(task => task[1] != action).map((task,i) => newArr.push(task.replace(task[1],i+1)))
  fs.writeFileSync(path.join(__dirname,'toDoList.txt'),newArr.join('\n'))
  console.log(newArr)
}