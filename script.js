let modeBtn = document.querySelector("#btn");
let div = document.querySelector(".shop-section");
console.log(div);
let currMode = "light";


modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        div.classList.add("dark");
        div.classList.remove("light");
    } else {
        currMode = "light";
        div.classList.add("light");
        div.classList.remove("dark");
     }
    console.log(currMode);
});

let modBtn = document.querySelector("#btn");
let box = document.querySelectorAll(".box");

let curMode = "light";


modBtn.addEventListener("click", () => {
    if(curMode === "light") {
        curMode = "dark";
        box.classList.add("dark");
        box.classList.remove("light");
    } else {
        curMode = "light";
        box.classList.add("light");
        box.classList.remove("dark");
     }
    console.log(curMode);
});