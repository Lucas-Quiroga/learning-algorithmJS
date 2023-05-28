/* Given an age in seconds, calculate how old someone would be on:

    Mercury: orbital period 0.2408467 Earth years
    Venus: orbital period 0.61519726 Earth years
    Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
    Mars: orbital period 1.8808158 Earth years
    Jupiter: orbital period 11.862615 Earth years
    Saturn: orbital period 29.447498 Earth years
    Uranus: orbital period 84.016846 Earth years
    Neptune: orbital period 164.79132 Earth years

So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old. */

describe('Space Age', () => {
	test('age on Earth', () => {
		expect(age('earth', 1000000000)).toEqual(31.69)
	})

	xtest('age on Mercury', () => {
		expect(age('mercury', 2134835688)).toEqual(280.88)
	})

	xtest('age on Venus', () => {
		expect(age('venus', 189839836)).toEqual(9.78)
	})

	xtest('age on Mars', () => {
		expect(age('mars', 2129871239)).toEqual(35.88)
	})

	xtest('age on Jupiter', () => {
		expect(age('jupiter', 901876382)).toEqual(2.41)
	})

	xtest('age on Saturn', () => {
		expect(age('saturn', 2000000000)).toEqual(2.15)
	})

	xtest('age on Uranus', () => {
		expect(age('uranus', 1210123456)).toEqual(0.46)
	})

	xtest('age on Neptune', () => {
		expect(age('neptune', 1821023456)).toEqual(0.35)
	})
})

export const age = (planet, orbPer) => {
	const earthYearSeconds = 31557600
	const mercuryYear = earthYearSeconds * 0.2408467
	const venusYear = earthYearSeconds * 0.61519726
	const marsYear = earthYearSeconds * 1.8808158
	const jupiterYear = earthYearSeconds * 11.862615
	const saturnYear = earthYearSeconds * 29.447498
	const uranusYear = earthYearSeconds * 84.016846
	const neptuneYear = earthYearSeconds * 164.79132

	switch (planet) {
		case 'earth':
			const ageEarth = orbPer / earthYearSeconds
			return +ageEarth.toFixed(2)
		case 'mercury':
			const ageMercury = orbPer / mercuryYear
			return +ageMercury.toFixed(2)
		case 'venus':
			const ageVenus = orbPer / venusYear
			return +ageVenus.toFixed(2)
		case 'mars':
			const ageMars = orbPer / marsYear
			return +ageMars.toFixed(2)
		case 'jupiter':
			const ageJupiter = orbPer / jupiterYear
			return +ageJupiter.toFixed(2)
		case 'saturn':
			const ageSaturn = orbPer / saturnYear
			return +ageSaturn.toFixed(2)
		case 'uranus':
			const ageUranus = orbPer / uranusYear
			return +ageUranus.toFixed(2)
		case 'neptune':
			const ageNeptune = orbPer / neptuneYear
			return +ageNeptune.toFixed(2)
	}
}

// another solution

const EARTH_ORBITAL_PERIOD_SECONDS = 31557600

const ORBITALS_PERIOD_RATES = {
	earth: 1,

	mercury: 0.2408467,

	venus: 0.61519726,

	mars: 1.8808158,

	jupiter: 11.862615,

	saturn: 29.447498,

	uranus: 84.016846,

	neptune: 164.79132,
}

export const age = (planet, seconds) => {
	const periodInSeconds =
		ORBITALS_PERIOD_RATES[planet] * EARTH_ORBITAL_PERIOD_SECONDS

	return parseFloat((seconds / periodInSeconds).toFixed(2))
}

// using map

const SECONDS_PER_ORBITAL_PERIOD = new Map([
	['earth', 31557600],

	['mercury', 7600543.81992],

	['venus', 19414149.052176],

	['mars', 59354032.690079994],

	['jupiter', 374355659.124],

	['saturn', 929292362.8848],

	['uranus', 2651370019.3296],

	['neptune', 5200418560.032001],
])

export const age = (planet, ageInSeconds) => {
	const orbitalPeriod = SECONDS_PER_ORBITAL_PERIOD.get(planet)

	return Number((ageInSeconds / orbitalPeriod).toFixed(2))
}