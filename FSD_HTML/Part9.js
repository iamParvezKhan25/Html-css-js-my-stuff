var firstName = prompt("Enter your First Name :");
var lastName = prompt("Enter your Last Name/Surname :");
var age = prompt("Enter Age :");
var height = prompt("Enter Height :");
var petName = prompt("What's your pet name ?");
alert("Thanks for Provide Information!")


var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;


//name condition

if (firstName[0] === lastName[0]) {
  nameCond = true;
}
else {
  nameCond = false;
}

//age condition

if(age>20 && age<30){
  ageCond = true;
}
else {
  ageCond = false;
}


//height condition

if (height>=170) {
  heightCond = true;
}
else {
  heightCond =false;
}

//pet name condition

if (petName[petName.length-1]==="y") {
  petCond = true;
}
else {
  petCond = false;
}

//check all condition

if (nameCond && ageCond && heightCond && petCond) {
  console.log("Welcome SPY!");
}
else{
  console.log("Nothing to see here. SORRY!!!");
}
