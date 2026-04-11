

const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");

//test
const img1 =document.querySelector ("#img1");
const img2 =document.querySelector ("#img2");

//real

const c1 =document.querySelector ("#co1");
const c11 =document.querySelector ("#co11");

const c2 =document.querySelector ("#co1");
const c22 =document.querySelector ("#co22");

const c3 =document.querySelector ("#co3");
const c33 =document.querySelector ("#co33");

const c4 =document.querySelector ("#co4");
const c44 =document.querySelector ("#co44");

const c5 =document.querySelector ("#co5");
const c55 =document.querySelector ("#co55");

const c6 =document.querySelector ("#co6");
const c66 =document.querySelector ("#co66");

const c7 =document.querySelector ("#co7");
const c77 =document.querySelector ("#co77");

const c8 =document.querySelector ("#co8");
const c88 =document.querySelector ("#co88");

const c9 =document.querySelector ("#co9");
const c99 =document.querySelector ("#co99");

const c10 =document.querySelector ("#co10");
const c100 =document.querySelector ("#co100");

const c0 =document.querySelector ("#co0");
const c00 =document.querySelector ("#co00");

const c =document.querySelector ("#co");
const cc =document.querySelector ("#coc");


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

//test

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});

//real work

c1.addEventListener("click", () => {
  c1.classList.add("hidden");     // hide img1
  c11.classList.remove("hidden");  // show img2
});

c2.addEventListener("click", () => {
  c2.classList.add("hidden");     // hide img1
  c22.classList.remove("hidden");  // show img2
});

c3.addEventListener("click", () => {
  c3.classList.add("hidden");     // hide img1
  c33.classList.remove("hidden");  // show img2
});

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});

img1.addEventListener("click", () => {
  img1.classList.add("hidden");     // hide img1
  img2.classList.remove("hidden");  // show img2
});