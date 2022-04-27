
function splashText() {
    let splash = ["Made out of pure CSS...*puts gun in mouth*", "Her: Centering a div is easy. Me: *Vietnam War Memories*", "Why would you come here?", "I was made in 2022", ""];
    //              0                       1                       2                                                           3                           4
    let decider = randomNumber(0, 4)

    document.getElementById("splash").innerHTML = splash[decider]
}

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
//Why doesnt JS provide random number function through a specified range? Should a stuck with Java.

