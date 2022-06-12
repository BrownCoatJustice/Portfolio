let splash = ["\"Did you know someone tried to make this website in pure CSS. And failed!\"\"I know right, what a doofus.\"", "Her: Centering a div is easy. Me: *Vietnam War Flashbacks*", "Why would you come here?", "I was made in 2022"];

function splashText() {
    let decider = randomNumber(0, 5)

    document.getElementById("splash").innerHTML = splash[decider]
}

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
//Why doesnt JS provide random number function through a specified range? Should a stuck with Java.

