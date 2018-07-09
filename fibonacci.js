// Fibonacci Sequence in Javascript

function fibonacci(n) {
	if (n <= 2) {
		return 1;
	} else {
		return fibonacci(n-1) + fibonacci(n-2);
	};
};

function main() {
	console.log(fibonacci(6));
};

main();