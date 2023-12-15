const makeChange = (c) => {
  // your name here
	let change = {
		q: 0,
		d: 0,
		n: 0,
		p: 0
	}
	while(c>=0){
		if(c>=25){
			change.q += 1;
			c = c - 25;
		}
		else if(c>=10){
			change.d += 1;
			c = c - 10;
		}
		else if(c>=5){
			change.n += 1;
			c = c - 5;
		}
		else if(c>=1){
			change.p += 1;
			c = c - 1;
		}
	}
	return change;
};

// Do not the change the code below
// const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
