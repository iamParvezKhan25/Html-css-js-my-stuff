var roster = []

// add new student
function addNew() {
  var newName = prompt("What name would you like to add?")
  roster.push(newName)
}

// remove newName
function remove() {
  var remName = prompt("What name would you like to remove?")
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}

// display

function display() {
  console.log(roster);
}

//quite

var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty";

if (start === 'y') {
  while (request !== "quit") {
    request = prompt("Please select an action ::: Add, Remove, Display, Quit.")

    if (request === 'add') {
      addNew();
    }

    else if (request === 'display') {
      display();
    }

    else if (request === 'remove') {
      remove();
    }

    else {
      alert("not recognized, will quit!")
      request = "quit"
    }
  }
}

alert("Thanks for using webApp! Please refresh to start again!")
