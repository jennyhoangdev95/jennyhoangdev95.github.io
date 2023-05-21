
let cartCount = 0;
function addProduct() {
    cartCount++;
    let countItems = document.querySelectorAll('.countItem');
    countItems.forEach(function (countItem) {
        countItem.textContent = cartCount;
    });
}
    
    // function setItemInLocal(name, value) {
    //     if (!name || !value) return;
    //     const listItems = JSON.parse(localStorage.getItem(name) || "[]");
    //     listItems.push(value);
    //     localStorage.setItem(name, JSON.stringify(listItems));
    //     }


    // function getItemInLocal(cname) {
    //     const cvalue = localStorage.getItem(cname)
    //     return cvalue ? JSON.parse(cvalue) : ""
    // }


// add funtion  cho homepage
let buttons = document.querySelectorAll('.slider--button-icon');
buttons.forEach(function (button) {
    button.addEventListener('click', addProduct);
});

// scroll button
const backToTopbtn = document.getElementsByClassName("backtop");
window.addEventListener("scroll", () => {
    for (let i = 0; i < backToTopbtn.length; i++) {
        if (window.scrollY > 300) {
            backToTopbtn[i].classList.remove("hide");
        } else {
            backToTopbtn[i].classList.add("hide");
        }
    }
});
