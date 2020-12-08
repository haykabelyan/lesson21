


let arr = [1, false, 'a', 5];
arr.length = 2;
arr[9] = 'kim';
console.log(arr);


console.log(typeof NaN);				// Number
console.log(typeof typeof NaN);			// String
console.log(typeof typeof typeof NaN); 	// String

console.log(5*'a');	//NaN
console.log(+'5');	// 5
console.log( Number('5') ); // 5
console.log(2+2+'2'+2+2);	// '4222'

