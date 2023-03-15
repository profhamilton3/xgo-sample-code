input.onButtonPressed(Button.B, function () {
    BTN_A_WASPRESSED = 1
    basic.showIcon(IconNames.Fabulous)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
    xgo.execution_action(xgo.action_enum.Handshake)
    BTN_A_WASPRESSED += 0
    basic.pause(5000)
    xgo.execution_action(xgo.action_enum.Sit_down)
})
let BTN_A_WASPRESSED = 0
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.showIcon(IconNames.Asleep)
BTN_A_WASPRESSED += 0
basic.forever(function () {
    if (BTN_A_WASPRESSED == 0) {
        basic.showIcon(IconNames.Happy)
        xgo.execution_action(xgo.action_enum.Wave)
        basic.pause(5000)
        basic.showIcon(IconNames.Surprised)
        xgo.execution_action(xgo.action_enum.Pee)
        basic.pause(5000)
    }
})
