let cartCount = 0;

if (localStorage.getItem('cartCount')) {
    cartCount = parseInt(localStorage.getItem('cartCount'));
}

let countItems = document.querySelectorAll('.countItem');
countItems.forEach(function (countItem) {
    countItem.textContent = cartCount;
});

function addProduct() {
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    countItems.forEach(function (countItem) {
        countItem.textContent = cartCount;
    });
}

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
