
// hangi butona basarsan o çalışacak
document.getElementById("a").addEventListener("click",function(){
    const audio = new Audio("audio/kick.wav")
    audio.play();
})
document.getElementById("b").addEventListener("click",function(){
    const audio = new Audio("audio/boom.wav")
    audio.play();
})
document.getElementById("c").addEventListener("click",function(){
    const audio = new Audio("audio/openhat.wav")
    audio.play();
})
document.getElementById("d").addEventListener("click",function(){
    const audio = new Audio("audio/ride.wav")
    audio.play();
})
document.getElementById("e").addEventListener("click",function(){
    const audio = new Audio("audio/tom.wav")
    audio.play();
})
document.getElementById("for-you").addEventListener("click",function(){
    const audio = new Audio("audio/nasil-olmusum2.wav")
    audio.play();
})
// basılan herhangi bir harf için çalışacak kod
document.addEventListener("keydown",function(){
    const audio = new Audio("audio/nasil-olmusum2.wav")
    audio.play();
})