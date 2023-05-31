describe('Matrix', () => {
	test('extract row from one number matrix', () => {
		expect(new Matrix('1').rows[0]).toEqual([1])
	})

	xtest('can extract row', () => {
		expect(new Matrix('1 2\n3 4').rows[1]).toEqual([3, 4])
	})

	xtest('extract row where numbers have different widths', () => {
		expect(new Matrix('1 2\n10 20').rows[1]).toEqual([10, 20])
	})

	xtest('can extract row from non-square matrix with no corresponding column', () => {
		expect(new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows[3]).toEqual([
			8, 7, 6,
		])
	})

	xtest('extract column from one number matrix', () => {
		expect(new Matrix('1').columns[0]).toEqual([1])
	})

	xtest('can extract column', () => {
		expect(new Matrix('1 2 3\n4 5 6\n7 8 9').columns[2]).toEqual([3, 6, 9])
	})

	xtest('can extract column from non-square matrix with no corresponding row', () => {
		expect(new Matrix('1 2 3 4\n5 6 7 8\n9 8 7 6').columns[3]).toEqual([
			4, 8, 6,
		])
	})

	xtest('can extract column from non-square matrix with more columns than rows', () => {
		expect(new Matrix('1 2 3\n4 5 6').columns[2]).toEqual([3, 6])
	})

	xtest('extract column where numbers have different widths', () => {
		expect(new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1]).toEqual([
			1903, 3, 4,
		])
	})
})


export class Matrix {
	constructor(string) {
		this.matrix = string.split('\n')
	}
	get rows() {
		return this.matrix.map(row => row.split(' ').map(Number))
	}
	get columns() {
    //get the lenght of the columns
		return this.rows[0].map((_, i) => {
      //fill in the columns
			return this.rows.map(row => row[i])
		})
	}
}

export class Matrix {
	constructor(matrix) {
		this.matrix = matrix

			.split('\n')

			.map(row =>
				row

					.split(' ')

					.map(val => +val)
			)
	}

	get rows() {
		return this.matrix
	}

	get columns() {
		let colSize = this.matrix[0].length

		//crea una nueva instancia de Array a partir de un objeto iterable.
		let colMatrix = Array.from({ length: colSize }, () => [])

		//for each row in matrix

		this.matrix.forEach(elem => {
			//loops through values in each rows in matrix

			for (let [index, entry] of elem.entries()) {
				//fill colArray from left colum to right

				colMatrix[index].push(entry)
			}
		})

		return colMatrix
	}
}

export class Matrix {
	#rows

	#columns

	constructor(matrix) {
		this.#rows = matrix

			.split('\n')

			.map(rowString => rowString.split(' ').map(Number))

		this.#columns = this.#rows[0].map((_, col) =>
			this.#rows.map(row => row[col])
		)
	}

	get rows() {
		return this.#rows
	}

	get columns() {
		return this.#columns
	}
}

const fromRowToNumbers = row => row.split(' ').map(elem => Number(elem))

const transposeMatrix = matrix =>
	matrix[0].map((_, i) => {
		return matrix.map(row => row[i])
	})

export class Matrix {
	constructor(matrix) {
		this.data = matrix.split('\n').map(fromRowToNumbers)

		this.transposed = transposeMatrix(this.data)
	}

	get rows() {
		return this.data
	}

	get columns() {
		return this.transposed
	}
}

export class Matrix {
	constructor(matrixString) {
    //elimina todos los espacios en blanco
		matrixString = matrixString.trim()

		let matrix = matrixString.split('\n')

		this.matrixRows = []

		for (let row = 0; row < matrix.length; row++) {
			this.matrixRows.push(matrix[row].split(' '))

			this.matrixRows[row] = this.matrixRows[row].map(number => {
				return parseInt(number)
			})
		}

		this.matrixColumns = []

		for (let column = 0; column < this.matrixRows[0].length; column++) {
			this.matrixColumns.push([])

			for (let row = 0; row < this.matrixRows.length; row++) {
				this.matrixColumns[column].push(this.matrixRows[row][column])
			}

			this.matrixColumns[column] = this.matrixColumns[column].map(
				number => {
					return parseInt(number)
				}
			)
		}
	}

	get rows() {
		return this.matrixRows
	}

	get columns() {
		return this.matrixColumns
	}
}

export class Matrix {
	constructor(data) {
		this.data = data

		this.columnsLength = 0
	}

	get rows() {
		return this.data.split('\n').map(row => {
			const splitRow = row.split(' ')

			this.columnsLengthFunc(splitRow)

			return splitRow.map(Number)
		})
	}

	get columns() {
		// split the different rows and get the column length

		const rows = this.rows

		// Create a new array depending on the maxlength of a row length

		const newArray = this.makeNewArray(this.columnsLength)

		rows.map(row => row.map((c, i) => newArray[i].push(c)))

		return newArray
	}

	columnsLengthFunc(splitRow) {
		const length = splitRow.length

		if (length > this.columnsLength) {
			this.columnsLength = length
		}
	}

	makeNewArray(length) {
		const newArray = []

		for (let i = 0; i < length; i++) {
			newArray.push([])
		}

		return newArray
	}
}