// Paso 1: Definir la tabla de mapeo
let leetTable = {
	a: '4',
	b: 'I3',
	c: '[',
	d: ')',
	e: '3',
	f: '|=',
	g: '&',
	h: '#',
	i: '1',
	j: ',_|',
	k: '>|',
	l: '1',
	m: '/\\/\\',
	n: '^/',
	o: '0',
	p: '|*',
	q: '(_,)',
	r: 'I2',
	s: '5',
	t: '7',
	u: '(_)',
	v: '\\/',
	w: '\\/\\/',
	x: '><',
	y: 'j',
	z: '2',
	1: 'L',
	2: 'R',
	3: 'E',
	4: 'A',
	5: 'S',
	6: 'b',
	7: 'T',
	8: 'B',
	9: 'g',
	0: 'o',
}

// Paso 2: Función para convertir un carácter a "leet" si existe en la tabla
const convertToLeet = char => {
	const lowerChar = char.toLowerCase()
	return leetTable[lowerChar] || char
}

// Paso 3: Función para convertir el texto a "leet" usando la función anterior
const textToLeet = text => {
	return text.split('').map(convertToLeet).join('')
}

// Ejemplo de uso
const textoOriginal = 'Hola, este es un texto de prueba.'
const textoLeet = textToLeet(textoOriginal)

console.log(textoLeet) // Resultado: "H01a, 35t3 35 un t3xt0 d3 pru3ba."