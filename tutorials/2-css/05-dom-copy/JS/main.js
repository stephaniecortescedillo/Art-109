

const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");
const img1 =document.querySelector ("#img1");
const img2 =document.querySelector ("#img2");
const img3 =document.querySelector ("#img3");



//change header with button click
changeHeaderButton.addEventListener("click",() => {
    header.innerHTML = "MEW!!";
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

//togle image visivility

img1.addEventListener("click", () =>{
    img2.classList.remove("hidden");
})
img2.addEventListener("click", () =>{
    img3.classList.remove("hidden");
})
img3.addEventListener("click", () =>{
    img1.classList.remove("hidden");
})