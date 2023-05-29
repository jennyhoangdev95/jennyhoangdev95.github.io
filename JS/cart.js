
    function setItemInLocal(name, value) {
        if (name == null) return
        const listItems = JSON.parse(
            localStorage.getItem(name) || "[]"
        )
        listItems.push(value)
        localStorage.setItem(name, JSON.stringify(listItems))
    }
const products = getItemInLocal('products')

function getItemInLocal(cname) {
    const cvalue = localStorage.getItem(cname)
    return cvalue ? JSON.parse(cvalue) : ""
}
let containerOrderList = document.getElementById("products--list")

if (products.length === 0) {
    let notication = document.getElementsByClassName('cart__container')[0];
    notication.innerHTML = "<p>Xin lỗi, không có sản phẩm nào trong giỏ hàng của bạn rồi.</p>";
} else {

    let arrayProducts = ""
    let priceTotal = 0

    let listID = []
    products.forEach((item) => {
        if (listID.indexOf(item.id) === -1) {
            listID.push(item.id)
        }
    })

    listID.forEach(id => {
        let element = products.filter((element) => element.id === id)
        let html2 = `
    <div class=" product--details d-flex justify-content-center align-items-center">
    <div class="namepro" style="width: 50%; display: flex; flex-direction: row; align-items: center;">
    <img style="width: 80px; height: 80px;" src="${element[0].srcImg}" alt="${element[0].title}">
        <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 10px;">
        <a style="text-align: left;">${element[0].title}</a>
        <p style="color: red; text-align: left; margin: 0;">xoá</p>
        </div>
    </div>
    <div style="text-align: center; width: 20%"><span>${element[0].price}</span></div>
    <div style="text-align: center; width: 15%">
        <div class="btn-amountPro">
            <button class="btn-amountPro minus-btn removeOne" data-id=${element[0].id}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="svg w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
            <input type="text" name="amountPro" id="count-${element[0].id}" value="${element.length}">
            <button class="btn-amountPro plus-btn addOne" data-id=${element[0].id}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="svg w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    </div>
    <div style="text-align: center; width: 15%" id="price-${element[0].id}"><span>${(element[0].price)}đ</span></div>
    </div>
    </div>
`
        arrayProducts += html2
        priceTotal += parseFloat(element[0].price) * element.length;
    });

    containerOrderList.innerHTML = arrayProducts;

}

let plusBtns = document.querySelectorAll('.addOne');
let minusBtns = document.querySelectorAll('.removeOne');


plusBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let id = event.target.closest('.btn-amountPro').dataset.id;
        console.log(id)
        localStorage.removeItem('products')
        products.forEach((item) => {
            if (item.id === Number(id)) {
                item.quantity = item.quantity + 1
                let countInput = document.querySelector(`#count-${id}`);
                countInput.value = item.quantity;
                let updatePricePro = document.querySelector(`#price-${id}`);
                updatePricePro.innerHTML = parseInt(item.quantity * item.price).toLocaleString() + ".000đ";
            }
            setItemInLocal("products", item)
        })
        // sau khi cập nhật số lượng sản phẩm, gọi lại hàm tính tổng giá tiền và cập nhập nhật giá trị lên giao diện
        let containerPriceTotal = document.getElementById("price-total");
        let priceTotal = calculateTotalPrice();
        if (priceTotal < 1000) {
            containerPriceTotal.innerHTML = priceTotal.toLocaleString() + ".000đ";
        } else {
            containerPriceTotal.innerHTML = (priceTotal / 1000).toLocaleString() + "0.000đ";
        }
    });
});


minusBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let id = event.target.closest('.btn-amountPro').dataset.id;
        localStorage.removeItem('products')
        products.forEach((item, index) => {
            if (item.id === Number(id)) {
                item.quantity = item.quantity - 1;
                if (item.quantity === 0) {
                    products.splice(index, 1);
                    localStorage.setItem('products', JSON.stringify(products));
                    updatePopup();
                } else {
                    let countInput = document.querySelector(`#count-${id}`);
                    countInput.value = item.quantity;
                    let updatePricePro = document.querySelector(`#price-${id}`);
                    updatePricePro.innerHTML = parseInt(item.quantity * item.price).toLocaleString() + ".000đ";
                    setItemInLocal("products", item);
                }
            }
        });
        // sau khi cập nhật số lượng sản phẩm, gọi lại hàm tính tổng giá tiền và cập nhập nhật giá trị lên giao diện
        let containerPriceTotal = document.getElementById("price-total");
        let priceTotal = calculateTotalPrice();
        if (priceTotal < 1000) {
            containerPriceTotal.innerHTML = priceTotal.toLocaleString() + ".000đ";
        } else {
            containerPriceTotal.innerHTML = (priceTotal / 1000).toLocaleString() + "0.000đ";
        }
    });
});
let containerPriceTotal = document.getElementById("price-total")
    let priceTotal = calculateTotalPrice();
    function calculateTotalPrice() {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        let totalPrice = 0;
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            let productPrice = product.price * product.quantity;
            totalPrice += productPrice;
        }
        return totalPrice;
    }
    if (priceTotal < 1000) {
        containerPriceTotal.innerHTML = priceTotal.toLocaleString() + ".000đ"

    } else {
        containerPriceTotal.innerHTML = (priceTotal / 1000).toLocaleString() + "0.000đ"
    }