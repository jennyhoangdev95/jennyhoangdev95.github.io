var countItem = 0

var list = document.getElementsByClassName('countItem');
var n;
for (n = 0; n < list.length; ++n) {
    list[n].value = countItem;
}

function addProduct() {
    countItem++
    var list = document.getElementsByClassName('countItem');
    var n;
    for (n = 0; n < list.length; ++n) {
        list[n].value = countItem;
    }
}


// let btns = document.querySelectorAll(".slider--button-icon")
// for (let i = 0; i < btns.length; i++) {
// let btn = btns[i]
// btn.addEventListener("click", add)
// }

// function add(event) {
// let id = event.target.dataset.id
// let item = data.filter((element) => {
// if (element.id === Number(id)) {
// return element
// }
// })}