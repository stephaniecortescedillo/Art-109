
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