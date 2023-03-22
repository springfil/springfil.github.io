let user = {
    name: "Вася"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  console.log(user);//{name: 'Вася', Symbol(id): 1}
  
  let id2 = Symbol("id");
  
  user[id2] = "Их идентификатор";
  console.log(user);//{name: 'Вася', Symbol(id): 1, Symbol(id): 'Их идентификатор'}


/////
  let id = Symbol("dddd");

  let user = {
    name: "f,j,f",
    [id]: 123 // просто "id: 123" не сработает
  };
  console.log(user)//{name: 'f,j,f', Symbol(dddd): 123} 

