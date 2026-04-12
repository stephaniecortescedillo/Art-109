
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");

//constelations

const co1 =document.querySelector ("#co1");
const co11 =document.querySelector ("#co11");

const co2 =document.querySelector ("#co2");
const co22 =document.querySelector ("#co22");

const co3 =document.querySelector ("#co3");
const co33 =document.querySelector ("#co33");

const co4 =document.querySelector ("#co4");
const co44 =document.querySelector ("#co44");

const co5 =document.querySelector ("#co5");
const co55 =document.querySelector ("#co55");

const co6 =document.querySelector ("#co6");
const co66 =document.querySelector ("#co66");

const co7 =document.querySelector ("#co7");
const co77 =document.querySelector ("#co77");

const co8 =document.querySelector ("#co8");
const co88 =document.querySelector ("#co88");

const co9 =document.querySelector ("#co9");
const co99 =document.querySelector ("#co99");

const co10 =document.querySelector ("#co10");
const co100 =document.querySelector ("#co100");

const co0 =document.querySelector ("#co0");
const co00 =document.querySelector ("#co00");

const co =document.querySelector ("#co");
const coc =document.querySelector ("#coc");

//extra
const s1 =document.querySelector ("#co1");
const tx1 =document.querySelector ("#tx1");

const s2 =document.querySelector ("#co1");
const tx2 =document.querySelector ("#tx2");

const s3 =document.querySelector ("#co1");
const tx3 =document.querySelector ("#tx3");

const s4 =document.querySelector ("#co1");
const tx4 =document.querySelector ("#tx4");

const s5 =document.querySelector ("#co1");
const tx5 =document.querySelector ("#tx5");

const s6 =document.querySelector ("#co1");
const tx6 =document.querySelector ("#tx6");

const s7 =document.querySelector ("#co1");
const tx7 =document.querySelector ("#tx7");








//change header with button click
changeHeaderButton.addEventListener("click",() => {
    header.innerHTML = "KEEP CLICKING!";
})

// Toogle Color theme

//create f for changing color text
function changeButtonText (){
    if(document.body.classList.contains("dark")){
        changeThemeButton.textContent = "Switch to light theme";
    } else{
        changeThemeButton.textContent = "switch to Dark Theme";
    }
}



changeThemeButton.addEventListener("click", () => {
    // add/remove dark clsss
    document.body.classList.toggle("dark");
})


//work

co1.addEventListener("click", () => {
  co1.classList.add("hidden");     // hide img1
  co11.classList.remove("hidden");  // show img2
});

co2.addEventListener("click", () => {
  co2.classList.add("hidden");     // hide img1
  co22.classList.remove("hidden");  // show img2
});

co3.addEventListener("click", () => {
  co3.classList.add("hidden");     // hide img1
  co33.classList.remove("hidden");  // show img2
});

co4.addEventListener("click", () => {
  co4.classList.add("hidden");     // hide img1
  co44.classList.remove("hidden");  // show img2
});

co5.addEventListener("click", () => {
  co5.classList.add("hidden");     // hide img1
  co55.classList.remove("hidden");  // show img2
});

co6.addEventListener("click", () => {
  co6.classList.add("hidden");     // hide img1
  co66.classList.remove("hidden");  // show img2
});

co7.addEventListener("click", () => {
  co7.classList.add("hidden");     // hide img1
  co77.classList.remove("hidden");  // show img2
});

co8.addEventListener("click", () => {
  co8.classList.add("hidden");     // hide img1
  co88.classList.remove("hidden");  // show img2
});

co9.addEventListener("click", () => {
  co9.classList.add("hidden");     // hide img1
  co99.classList.remove("hidden");  // show img2
});

co10.addEventListener("click", () => {
  co10.classList.add("hidden");     // hide img1
  co100.classList.remove("hidden");  // show img2
});

co7.addEventListener("click", () => {
  co.classList.add("hidden");     // hide img1
  coc.classList.remove("hidden");  // show img2
});

co0.addEventListener("click", () => {
  co0.classList.add("hidden");     // hide img1
  co00.classList.remove("hidden");  // show img2
});

//extra

s1.addEventListener("click", () => {
  s1.classList.add("hidden");     // hide img1
  tx1.classList.remove("hidden");  // show img2
  tx1.textContent = "The solar system formed 4.6 billion years ago";
});

s2.addEventListener("click", () => {
  s2.classList.add("hidden");     // hide img1
  tx2.classList.remove("hidden");  // show img2
  //tx2.textContent = "A day is longer than a year on Venus ";
});

s3.addEventListener("click", () => {
  s3.classList.add("hidden");     // hide img1
  tx3.classList.remove("hidden");  // show img2
  tx3.textContent = "Our solar system has hundreds of moons orbiting planets";
});

s4.addEventListener("click", () => {
  s4.classList.add("hidden");     // hide img1
  tx4.classList.remove("hidden");  // show img2
  tx4.textContent = "Asteroids can have rings and moons";
});

s5.addEventListener("click", () => {
  s5.classList.add("hidden");     // hide img1
  tx5.classList.remove("hidden");  // show img2
  tx5.textContent = "Mercury and Venus have no moon";
});

s6.addEventListener("click", () => {
 s6.classList.add("hidden");     // hide img1
  tx6.classList.remove("hidden");  // show img2
  tx6.textContent = "The Sun is the biggest object in our solar system";
});

s7.addEventListener("click", () => {
  s7.classList.add("hidden");     // hide img1
  tx7.classList.remove("hidden");  // show img2
  tx7.textContent = "A shooting star color depends on what its made of";
});
