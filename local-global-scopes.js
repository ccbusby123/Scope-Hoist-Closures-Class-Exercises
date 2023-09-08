// Declare a global variable here
let greeting = "hello";

function modifyGlobal() {
  // Try to modify the global variable here
  greeting = "goodbye";

  modifyGlobal();
  console.log (greeting);
}

function changeGreetingAgain() {
  // Declare a local variable with the same name as the global variable
}
let greeting = "Hola";
console.log ("This is from change greeting again: ", greeting);
}
changeGreetingAgain();

// Call both functions here
 
}