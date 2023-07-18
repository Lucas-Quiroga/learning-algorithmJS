const fizzBuzz = () => {
	for (let n = 0; n <= 100; n++) {
		const fizzbuzz = n % 3 === 0 && n % 5 === 0
		const fizz = n % 3 === 0
		const buzz = n % 5 === 0

		switch (true) {
			case n === 0:
				console.log(0)
				break
			case fizzbuzz:
				console.log('fizzbuzz')
				break
			case fizz:
				console.log('fizz')
				break
			case buzz:
				console.log('buzz')
				break
			default:
				console.log(n)
				break
		}
	}
}

fizzBuzz()