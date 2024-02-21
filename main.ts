input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Zahl += -1
    basic.showNumber(Zahl)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Zahl < Zufall) {
        basic.showIcon(IconNames.ArrowNorth)
    } else if (Zahl > Zufall) {
        basic.showIcon(IconNames.ArrowSouth)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.setLedColor(0x00ff00)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Zahl += 1
    basic.showNumber(Zahl)
})
let Zahl = 0
let Zufall = 0
Zufall = randint(1, 9)
Zahl = 5
basic.showNumber(Zufall)
basic.pause(2000)
basic.clearScreen()
