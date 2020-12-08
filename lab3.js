


let a = 99;

const foo = ()=>{
	let a = 55;
	foo2();
};


const foo2 = ()=>{ 
	console.log(a);
}

foo();