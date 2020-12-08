

const arr = [];

for(let i=0; i<5; i++){
	arr.push(
		()=>{
			console.log(i++);
		}
	);
}

arr[4]();	// 4
arr[4]();	// 5
arr[1]();	// 1

