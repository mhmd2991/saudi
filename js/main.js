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