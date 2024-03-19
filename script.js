let button = document.querySelector(".hed-button button");
let input = document.querySelector("#input");

button.addEventListener("click", () => {
  if (input.style.display === "block") {
    input.style.display = "none";
  } else {
    input.style.display = "block";
  }
});
let icon1 = document.querySelector(".icon-left i");
let icon2 = document.querySelector(".icon-right i");
let main = document.querySelector(".main-img")
icon1.addEventListener("click" , ()=>{
  main.style.backgroundImage = "url(pexels-pixabay-207692.jpg)";
});
icon2.addEventListener("click" , ()=>{
  main.style.backgroundImage = "url(pexels-marta-siedlecka-586570.jpg)";
});