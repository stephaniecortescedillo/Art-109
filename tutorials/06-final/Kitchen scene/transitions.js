

//extra
const s1 =document.querySelector ("#s1");
const tx1 =document.querySelector ("#tx1");

const s2 =document.querySelector ("#s2");
const tx2 =document.querySelector ("#tx2");

const s3 =document.querySelector ("#s3");
const tx3 =document.querySelector ("#tx3");

const s4 =document.querySelector ("#s4");
const tx4 =document.querySelector ("#tx4");

const s5 =document.querySelector ("#s5");
const tx5 =document.querySelector ("#tx5");

const s6 =document.querySelector ("#s6");
const tx6 =document.querySelector ("#tx6");

const s7 =document.querySelector ("#s7");
const tx7 =document.querySelector ("#tx7");


//extra

s1.addEventListener("click", () => {
  tx1.classList.remove("hidden");  // show img2
  tx1.textContent = "The solar system formed 4.6 billion years ago";
});

s2.addEventListener("click", () => {
  tx2.classList.remove("hidden");  // show img2
  tx2.textContent = "A day is longer than a year on Venus ";
});

s3.addEventListener("click", () => {

  tx3.classList.remove("hidden");  // show img2
  tx3.textContent = "Our solar system has hundreds of moons ";
});

s4.addEventListener("click", () => {
  tx4.classList.remove("hidden");  // show img2
  tx4.textContent = "Asteroids can have rings and moons";
});

s5.addEventListener("click", () => {
  tx5.classList.remove("hidden");  // show img2
  tx5.textContent = "Mercury and Venus have no moon";
});

s6.addEventListener("click", () => {
  tx6.classList.remove("hidden");  // show img2
  tx6.textContent = " Precious metals are forged when dead stars collide ";
});

s7.addEventListener("click", () => {
  tx7.classList.remove("hidden");  // show img2
  tx7.textContent = "A shooting star color depends on what its made of";
});
