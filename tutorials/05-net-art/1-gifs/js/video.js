const hoverVideos = document.querySelectorAll (".hover")
const clickVideos = document.querySelectorAll (".click")

hoverVideos.forEach(video => {
    video.addEventListener("mouseenter",() => {
    video.play();
})


    video.addEventListener("mouseleave",() => {
    video.pause();
    //video.currentTime = 0;
})

})

clickVideos.forEach(video => {
    video.addEventListener("click",() => {
    video.play();
})


})