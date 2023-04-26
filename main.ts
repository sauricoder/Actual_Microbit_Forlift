input.onButtonPressed(Button.A, function () {
    comment.comment("¨Sets the fork to the down position¨")
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
})
input.onButtonPressed(Button.AB, function () {
    comment.comment("Moove Forward for 1 Second")
    wuKong.setAllMotor(20, 20)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    comment.comment("¨Sets the fork to the down position¨")
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    comment.comment("moves backward for 1 second")
    wuKong.setAllMotor(-20, -20)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
})
basic.showIcon(IconNames.Rollerskate)
