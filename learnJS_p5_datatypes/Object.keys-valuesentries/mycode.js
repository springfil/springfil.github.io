//сумма времени по status - done
const tasks = [
  { id: 1, name: 'Task 1', status: 'done', time: 30 },
  { id: 2, name: 'Task 2', status: 'in progress', time: 60 },
  { id: 3, name: 'Task 3', status: 'done', time: 45 },
  { id: 4, name: 'Task 4', status: 'todo', time: 20 },
  { id: 5, name: 'Task 5', status: 'done', time: 90 },
  { id: 6, name: 'Task 6', status: 'done', time: 60 },
  { id: 7, name: 'Task 7', status: 'in progress', time: 15 },
  { id: 8, name: 'Task 8', status: 'done', time: 120 },
  { id: 9, name: 'Task 9', status: 'in progress', time: 30 },
  { id: 10, name: 'Task 10', status: 'todo', time: 45 },
];


const minutesStatusDone = (tasks) => {
  return tasks.reduce((obj, item) => {
       if(obj[item.status]){
      obj[item.status].push(item.time)
    }
    else{
      obj[item.status] = [];
      obj[item.status].push(item.time);
    }
  return obj
  },{})
}

let arrTime = Object.
entries(minutesStatusDone(tasks)).shift().pop()

let result = arrTime.reduce((a, b) => a + b);
console.log(arrTime);
console.log(result);

// плохое решение - есть еще варианты в общем файле codewars_lc


