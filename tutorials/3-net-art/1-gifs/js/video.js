const hovervideos = document.querySelectorAll (".hover")

hovervideos.forEach(video => {
video.addEventListener("mouseenter",() => {
video.play();
})


video.addEventListener("mouseleave",() => {
video.pause();
//video.currentTime = 0;
})
})