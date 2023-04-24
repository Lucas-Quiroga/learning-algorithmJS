export function Size(width = 80, height = 60) {
	this.width = width
	this.height = height
	this.resize = (newWidth, newHeight) => {
		this.width = newWidth
		this.height = newHeight
	}
}

export function Position(x = 0, y = 0) {
	this.x = x
	this.y = y

	this.move = (newX, newY) => {
		this.x = newX
		this.y = newY
	}
}

export class ProgramWindow {
	constructor() {
		this.screenSize = new Size(800, 600)
		this.size = new Size()
		this.position = new Position()
	}

	resize(newSize) {
		this.size.width = newSize.width >= 1 ? newSize.width : 1
		this.size.height = newSize.height >= 1 ? newSize.height : 1

		if (this.size.width + this.position.x > this.screenSize.width)
			this.size.width = this.screenSize.width - this.position.x
		if (this.size.height + this.position.y > this.screenSize.height)
			this.size.height = this.screenSize.height - this.position.y
	}

	move(newPosition) {
		this.position.x = newPosition.x < 0 ? 0 : newPosition.x
		this.position.y = newPosition.y < 0 ? 0 : newPosition.y

		if (this.size.width + this.position.x > this.screenSize.width)
			this.position.x = this.screenSize.width - this.size.width
		if (this.size.height + this.position.y > this.screenSize.height)
			this.position.y = this.screenSize.height - this.size.height
	}
}

export function changeWindow(programWindow) {
	programWindow.resize(new Size(400, 300))
	programWindow.move(new Position(100, 150))
	return programWindow
}

export function changeWindow(win) {
	win.size.width = 400
	win.size.height = 300
	win.position.x = 100
	win.position.y = 150
  
	return win
}
