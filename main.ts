basic.forever(function () {
    basic.showString("V=")
    basic.showNumber(pins.analogReadPin(AnalogPin.P1) / 320)
    basic.pause(500)
})
