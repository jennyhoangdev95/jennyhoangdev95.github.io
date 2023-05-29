let btn = document.getElementById('btn-proceed-checkout');
    btn.addEventListener("click", checkout)    

function checkout() {
    let popUp = document.getElementById('popup--cart__id');
    popUp.classList.remove("d-none");
    let backGround = document.getElementById('background--popup');
    backGround.classList.add("active");
    updatePopup();

    let popOut = document.getElementById('popOut');
    popOut.addEventListener("click", popout);
    function popout() {
        let popout = document.getElementById('popup--cart__id');
        popout.classList.add("d-none");
        let backGround = document.getElementById('background--popup');
        backGround.classList.remove("active");
    }
}