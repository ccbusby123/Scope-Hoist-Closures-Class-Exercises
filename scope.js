function outerFunction() {//
	let outerVar = "I'm outside!"; //Global scope

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar? No.
		console.log(innerVar); // Can we access innerVar? Yes
	}

	innerFunction();//Local scope
}

outerFunction();//Global scope