let PositionX = 0
let PositionY = 0
let PositionH = randint(-1, 1)
let PositionV = randint(-1, 1)
basic.forever(function () {
    basic.clearScreen()
    led.plot(PositionX, PositionY)
    PositionX += PositionH
    PositionY += PositionV
    basic.pause(200)
    if (PositionX > 4) {
        PositionX = 4
        PositionH = -1
        PositionV = randint(-1, 1)
    }
    if (PositionX < 0) {
        PositionX = 0
        PositionH = 1
        PositionV = randint(-1, 1)
    }
    if (PositionY > 4) {
        PositionY = 4
        PositionV = -1
        PositionH = randint(-1, 1)
    }
    if (PositionY < 0) {
        PositionY = 0
        PositionV = 1
        PositionH = randint(-1, 1)
    }
})
