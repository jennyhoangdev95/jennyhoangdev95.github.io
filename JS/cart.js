const products = getItemInLocal('products')

function getItemInLocal(cname) {
    const cvalue = localStorage.getItem(cname)
    return cvalue ? JSON.parse(cvalue) : ""
}
let containerOrderList = document.getElementById("products--list")

if (products.length === 0) {
    let notication = document.getElementsByClassName('cart__container')[0];
    notication.innerHTML = "<p>Xin lỗi, không có sản phẩm nào trong giỏ hàng của bạn rồi.</p>";
} else{

let arrayProducts = ""
let priceTotal = 0
products.forEach(element => {
    let html2 = `
    <div class=" product--details d-flex justify-content-center align-items-center">
    <div class="namepro" style="width: 50%; display: flex; flex-direction: row; align-items: center;">
    <img style="width: 80px; height: 80px;" src="${element.srcImg}" alt="${element.title}">
        <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 10px;">
        <a style="text-align: left;">${element.title}</a>
        <p style="color: red; text-align: left; margin: 0;">xoá</p>
        </div>
    </div>
    <div style="text-align: center; width: 20%"><span>${element.price}</span></div>
    <div style="text-align: center; width: 15%">
        <div class="btn-amountPro">
            <button class="btn-amountPro minus-btn" onclick="minusAmountPro()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="svg w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
            <input type="text" name="amountPro" id="amountPro" value="1">
            <button class="btn-amountPro plus-btn" onclick="plusAmountPro()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="svg w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    </div>
    <div style="text-align: center; width: 15%"><span>${element.price}</span></div>
    </div>
    </div>
`
    arrayProducts += html2
    priceTotal += parseFloat(element.price);
});

containerOrderList.innerHTML = arrayProducts;
let containerPriceTotal = document.getElementById("price-total")
if (priceTotal < 1000){
    containerPriceTotal.innerHTML = priceTotal.toLocaleString() + ".000đ"   
} else {
    containerPriceTotal.innerHTML = (priceTotal / 1000).toLocaleString() + "0.000đ"
}}