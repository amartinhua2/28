basic.forever(function () {
    if (input.compassHeading() > 315) {
        basic.showNumber(input.compassHeading())
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
basic.forever(function () {
    if (input.compassHeading() > 45) {
        basic.showNumber(input.compassHeading())
        music.stopMelody(MelodyStopOptions.All)
    }
})
