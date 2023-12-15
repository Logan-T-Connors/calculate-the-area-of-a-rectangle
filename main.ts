game.splash("Let's calculate the area and the perimeter of a rectangle!")
let length = game.askForNumber("What's the length (cm)?")
let width = game.askForNumber("What's the width (cm)?")
let perimeter = 2 * (length + width)
let area = length * width
game.splash("The perimeter of the rectangle with length " + length + "cm and width " + width + "cm is " + perimeter + "cm")
area = length * width
game.splash("The area of the rectangle with length " + length + "cm and width " + width + "cm is " + area + "cm^2")
