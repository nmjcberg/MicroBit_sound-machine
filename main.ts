input.onButtonPressed(Button.A, function () {
    soundTrack += -1
    if (soundTrack < 1) {
        soundTrack = NumberOfTracks
    }
    doUpdate = 1
})
input.onButtonPressed(Button.B, function () {
    soundTrack += 1
    if (soundTrack > NumberOfTracks) {
        soundTrack = 1
    }
    doUpdate = 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (soundTrack == 1) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    } else if (soundTrack == 2) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    } else if (soundTrack == 3) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    } else {
        basic.showString("?T")
    }
})
let doUpdate = 0
let NumberOfTracks = 0
let soundTrack = 0
soundTrack = 1
NumberOfTracks = 3
doUpdate = 1
basic.forever(function () {
    if (doUpdate == 1) {
        soundTrack = Math.constrain(soundTrack, 1, NumberOfTracks)
        if (soundTrack == 1) {
            basic.showIcon(IconNames.Heart)
        } else if (soundTrack == 2) {
            basic.showIcon(IconNames.SmallHeart)
        } else if (soundTrack == 3) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showString("?F")
        }
        doUpdate = 0
    }
})
