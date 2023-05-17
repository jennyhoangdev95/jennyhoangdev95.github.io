const btnCart = document.querySelectorAll('.btn-cart');
btnCart.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement.parentElement.parentElement
        var productImg = product.querySelector('img').src
        var productName = product.querySelector('.product-name').innerText
        var productPrice = product.querySelector('.price-box').innerText
    })
});
function addcart(productImg, productName, productPrice){
    var popUpCart = document.createElement("tr")
    var popUpCartContent = productImg
    popUpCart.innerHTML = popUpCartContent
    var PopupCartTable = document.querySelector('tbody')
    PopupCartTable.append(popUpCart)


}
