/** Instructions

Compute Pascal's triangle up to a given number of rows.

In Pascal's Triangle each number is computed by adding the numbers to the right and left of the current position in the previous row. */

export const rows = rows => {
	let triangulo = []

	for (let index = 0; index < rows; index++) {
		let row = []
		for (let newIndex = 0; newIndex <= index; newIndex++) {
			if (newIndex === 0 || newIndex === index) {
				row.push(1)
			} else {
				row.push(
					triangulo[index - 1][newIndex - 1] +
						triangulo[index - 1][newIndex]
				)
			}
		}
		triangulo.push(row)
	}
	return triangulo
}

export const rows = n => {
	if (n === 0) {
		return []
	}

	if (n === 1) {
		return [[1]]
	}

	const prevTriangle = rows(n - 1)

	const lastRow = prevTriangle[prevTriangle.length - 1]

	const newRow = [
		...lastRow.map((v, i) => (i === 0 ? 1 : lastRow[i - 1] + v)),
		1,
	]

	return [...prevTriangle, newRow]
}

export const rows = rowNum => {
	const result = []

	for (let i = 0; i < rowNum; i++) {
		result[i] = [1] // initialize

		for (let j = 1; j < i + 1; j++) {
			let x = result[i - 1][j - 1] || 0

			let y = result[i - 1][j] || 0

			result[i].push(x + y)
		}
	}

	return result
}

export const rows = rowNumber => {
	let triangleArray = []

	if (rowNumber === 0) return triangleArray

	for (let row = 0; row <= rowNumber - 1; row++) {
		let rowArray = []

		for (let i = 0; i <= row; i++) {
			let number

			if (row < 1) number = 1
			else {
				let leftNumber = triangleArray[row - 1][i - 1] ?? 0

				let rightNumber = triangleArray[row - 1][i] ?? 0

				number = leftNumber + rightNumber
			}

			rowArray.push(number)
		}

		triangleArray.push(rowArray)
	}

	return triangleArray
}

export const rows = n => {
	let out = []

	for (let i = 0; i < n; i++) {
		let row = [1]

		for (let j = 1; j <= i; j++) {
			let left = out[i - 1][j - 1]

			let right = out[i - 1][j] || 0

			row.push(left + right)
		}

		out.push(row)
	}

	return out
}

export const rows = len => {
	let t = []

	for (let i = 0; i < len; i++) {
		t = [...t, []]

		for (let j = 0; j < i + 1; j++) {
			if (j === 0 || j === i) t[i] = [...t[i], 1]
			else t[i] = [...t[i], t[i - 1][j - 1] + t[i - 1][j]]
		}
	}

	return t
}

export const rows = rows => {
	let tri = []

	for (let i = 0; rows > i; i++) {
		tri[i] = new Array(i + 1)

		for (let j = 0; j < i + 1; j++) {
			if (j === 0 || j === i) {
				tri[i][j] = 1
			} else {
				tri[i][j] = tri[i - 1][j - 1] + tri[i - 1][j]
			}
		}
	}

	return tri
}

const pascal = (col, row) => {
	if (col == 0 || col == row) return 1
	else return pascal(col - 1, row - 1) + pascal(col, row - 1)
}

export const rows = l => {
	if (l <= 0) return new Array()

	let triangle = new Array()

	for (let r = 0; r < l; r++) {
		let line = new Array()

		for (let c = 0; c < r + 1; c++) line.push(pascal(c, r))

		triangle.push(line)
	}

	return triangle
}

