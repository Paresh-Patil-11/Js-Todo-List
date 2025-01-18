let todo = [];

while (true) {
  let req = prompt("Which operation will be performed");

  if (req == "Quit") {
    console.log("You will be quit app...");
    break;
  }
  if (req == "Add") {
    console.log("Now you performing adding opration...");
    let noAdd = prompt("How many tasks you want to add");
    noAdd = parseInt(noAdd);
    let a = 0;
    while (a < noAdd) {
      let reqAdd = prompt("Add element into todo list");
      todo.push(reqAdd);
      a += 1;
    }
    console.log("Your adding operation has been done!");
    console.log("Your Updated todo list is ...");
    console.log(todo);
    let ope = prompt("You want to contiune with operation! Yes or No");
    if(ope == "Yes"){
    }
    else{
        break;
    }
  } else if (req == "Delete") {
    console.log("Now you performing removeing operation...");
    let noDel = prompt("How many tasks you want to remove");
    noDel = parseInt(noDel);
    let d = 0;
    while (d < noDel) {
      let reqDel = prompt("Which element want to remove from list");
      let ind = todo.indexOf(reqDel);
      todo.splice(ind, 1);
      d += 1;
    }
    console.log("Your deleteing operation has been done!");
    console.log("Your Updated todo list is ...");
    console.log(todo);
    let ope = prompt("You want to contiune with operation! Yes or No");
    if(ope == "No"){
        break;
    }
  } else if (req == "List") {
    for (list of todo) {
      console.log(list);
    }
    console.log("Your List has been Displayed...");
    let ope = prompt("You want to contiune with operation! Yes or No");
    if(ope == "No"){
        break;
    }
  } 
  else {
    console.log("Your input has been invaild! Try again...");
  }
}
