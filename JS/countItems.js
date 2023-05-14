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


