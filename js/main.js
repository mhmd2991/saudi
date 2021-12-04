/*let tabs = document.querySelectorAll(".nav li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content section");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.classList.remove("active");
        });
        document.querySelector(e.currentTarget.dataset.cont).classList.add("active");
    });
});*/

let radio = document.querySelectorAll("input");
let radioArray = Array.from(radio);
let tabs = document.querySelectorAll(".nav li");
let tabsArray = Array.from(tabs);


tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
       document.querySelector(e.currentTarget.dataset.cont).checked = true;
    });
});


