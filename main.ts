// 不停地检测心情值
function _for () {
    happy += -5
    if (_shake != 1) {
        if (happy > 50) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
        if (happy < 50 && happy > 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
        }
        if (happy < 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    }
    basic.pause(10000)
}
function shock () {
    _shake = 1
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . # . .
        . . . . .
        `)
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(3, 1, 0)
    basic.pause(100)
    led.plotBrightness(0, 1, 255)
    led.plotBrightness(3, 1, 255)
    basic.pause(100)
    led.plotBrightness(0, 1, 0)
    led.plotBrightness(3, 1, 0)
    basic.pause(100)
    led.plotBrightness(0, 0, 255)
    led.plotBrightness(3, 0, 255)
    basic.pause(100)
    led.plotBrightness(0, 0, 0)
    led.plotBrightness(3, 0, 0)
    basic.pause(100)
    led.plotBrightness(1, 0, 255)
    led.plotBrightness(4, 0, 255)
    basic.pause(100)
    led.plotBrightness(1, 0, 0)
    led.plotBrightness(4, 0, 0)
    basic.pause(100)
    led.plotBrightness(1, 1, 255)
    led.plotBrightness(4, 1, 255)
    basic.pause(100)
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(4, 1, 0)
    basic.pause(100)
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(1, 1, 0)
    basic.pause(100)
    led.plotBrightness(0, 1, 255)
    led.plotBrightness(3, 1, 255)
    basic.pause(100)
    led.plotBrightness(0, 1, 0)
    led.plotBrightness(3, 1, 0)
    basic.pause(100)
    led.plotBrightness(0, 0, 255)
    led.plotBrightness(3, 0, 255)
    basic.pause(100)
    led.plotBrightness(0, 0, 0)
    led.plotBrightness(3, 0, 0)
    basic.pause(100)
    led.plotBrightness(1, 0, 255)
    led.plotBrightness(4, 0, 255)
    basic.pause(100)
    led.plotBrightness(1, 0, 0)
    led.plotBrightness(4, 0, 0)
    basic.pause(100)
    led.plotBrightness(1, 1, 255)
    led.plotBrightness(4, 1, 255)
    basic.pause(100)
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(4, 1, 0)
    basic.pause(100)
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(1, 1, 0)
    basic.pause(100)
    led.plotBrightness(0, 1, 255)
    led.plotBrightness(3, 1, 255)
    basic.pause(100)
    led.plotBrightness(0, 1, 0)
    led.plotBrightness(3, 1, 0)
    basic.pause(100)
    led.plotBrightness(0, 0, 255)
    led.plotBrightness(3, 0, 255)
    basic.pause(100)
    led.plotBrightness(0, 0, 0)
    led.plotBrightness(3, 0, 0)
    basic.pause(100)
    led.plotBrightness(1, 0, 255)
    led.plotBrightness(4, 0, 255)
    basic.pause(100)
    led.plotBrightness(1, 0, 0)
    led.plotBrightness(4, 0, 0)
    basic.pause(100)
    led.plotBrightness(1, 1, 255)
    led.plotBrightness(4, 1, 255)
    basic.pause(100)
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(4, 1, 0)
    basic.pause(100)
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(1, 1, 0)
    basic.pause(100)
    led.plotBrightness(0, 1, 255)
    led.plotBrightness(3, 1, 255)
    basic.pause(100)
    led.plotBrightness(0, 1, 0)
    led.plotBrightness(3, 1, 0)
    basic.pause(100)
    led.plotBrightness(0, 0, 255)
    led.plotBrightness(3, 0, 255)
    basic.pause(100)
    led.plotBrightness(0, 0, 0)
    led.plotBrightness(3, 0, 0)
    basic.pause(100)
    led.plotBrightness(1, 0, 255)
    led.plotBrightness(4, 0, 255)
    basic.pause(100)
    led.plotBrightness(1, 0, 0)
    led.plotBrightness(4, 0, 0)
    basic.pause(100)
    led.plotBrightness(1, 1, 255)
    led.plotBrightness(4, 1, 255)
    basic.pause(100)
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(4, 1, 0)
    basic.pause(100)
    led.plotBrightness(1, 1, 0)
    led.plotBrightness(1, 1, 0)
    basic.pause(100)
    _shake = 0
    // 重启一下以免爆内存系统崩溃
    control.reset()
}
input.onButtonPressed(Button.A, function () {
    // 判断是为了避免干扰头晕动画
    // 后面同理
    if (_shake != 1) {
        happy = 100
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onGesture(Gesture.SixG, function () {
    shock()
})
input.onGesture(Gesture.Shake, function () {
    if (_shake != 1) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        happy = 100
        basic.pause(1000)
        if (_shake != 1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (_shake != 1) {
        happy = 100
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
    }
})
let _shake = 0
let happy = 0
happy = 50
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    _for()
})
