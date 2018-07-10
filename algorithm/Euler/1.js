// Project Euler No.1

// Sum all multiples of 3 or 5

function main() {
	let result = 0;
	for (i = 1; i < 1000; i++) {
		if (i % 3 === 0) {
			result += i;
		} else if (i % 5 === 0) {
			result += i;
		}
	};
	console.log(result);
}

main();

