const getCardEle = document.getElementById("productCard")

const mockData = [
    {
        id: 1,
        title: "Sữa tắm Dove",
        price: "150.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/3-jpeg-da5efbe5-c9c6-46e3-a19b-c66b5c566971.jpg?v=1657707796000"
    },
    {
        id: 2,
        title: "Sữa tắm Purité",
        price: "200.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/5-jpeg-4298c8de-60bf-46ba-a1a4-78eb7df3e047.jpg?v=1657707688000"
    },
    {
        id: 3,
        title: "Sữa tắm Pharmacity",
        price: "150.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/2-jpeg-e4f13416-93d1-4d5c-b7a9-5ae454ef4d9d.jpg?v=1657707526000"
    },
    {
        id: 4,
        title: "Sữa tắm ST.Ives",
        price: "110.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/3-jpeg-9c9951ce-445d-42c7-9d57-a9596ec97336.jpg?v=1657707111000"
    },
    {
        id: 5,
        title: "Sữa tắm LOVE BEAUTY & PLANET",
        price: "150.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/5-jpeg-40a9699c-5ca8-4231-8ff5-4d60e4917b72.jpg?v=1657707031000"
    },
    {
        id: 6,
        title: "Sữa rửa mặt Senka",
        price: "80.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/5-jpeg-de46ebbc-476e-4642-b635-c1fe250d6fcd.jpg?v=1657706907000"
    },
    {
        id: 7,
        title: "Sữa rửa mặt Hazeline",
        price: "55.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/3-jpeg-c5582b5e-e1a6-45a4-90e6-90063370021b.jpg?v=1657706759000"
    },
    {
        id: 8,
        title: "Sữa rửa mặt Hatomuzi",
        price: "95.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/2-jpeg-1ecf7f6c-428e-4b09-a57c-8ed072188b73.jpg?v=1657706673000"
    },
    {
        id: 9,
        title: "Sữa rửa mặt Rice milk",
        price: "75.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/2-jpeg-c6697a74-c45c-4b65-8ceb-743294c1ba3a.jpg?v=1657706562000"
    },
    {
        id: 10,
        title: "Sữa rửa mặt Eucerin",
        price: "55.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/4-jpeg-a7e3fb2d-d7f4-4384-a401-56e248d580d4.jpg?v=1657706444000"
    },
    {
        id: 11,
        title: "Sữa rửa mặt Clinic",
        price: "65.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/2-jpeg-caea9330-39c7-4c8d-aa9e-1c1c5e4118b9.jpg?v=1657706298000"
    },
    {
        id: 12,
        title: "Kem dưỡng da  V7 Toning Light",
        price: "80.000₫",
        srcImg: "//bizweb.dktcdn.net/thumb/large/100/459/658/products/4-jpeg-8f345d84-332c-423c-a8cb-6b2a997b0c49.jpg?v=1658809804000"
    },
]
let html = ""

for (let index = 0; index < mockData.length; index++) {
    const card = `
    <div class="col-lg-3 col-md-4 col-6 productItem">
        <div class="product--thumnail">
            <a class="image_thumb scale_hover" href="#" title=${mockData[index].title} style="height: 272px;">
                <img src=${mockData[index].srcImg}
                    alt=${mockData[index].title} data-was-processed="true" style="object-fit: fill;">
            </a>
            <div class="action">
                <button class="btn-proceed-checkout">Mua ngay</button> 
                <button onclick="addProduct()" data-id=${mockData[index].id} class="btn-cart">   
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                        <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z"
                        fill="#333333"></path>
                        </svg>
                </button>
            </div>
        </div>
        <div class="product--information">
            <h3 class="product-name"><a href="#" title=${mockData[index].title}>${mockData[index].title}</a></h3>
            <div class="price-box"> <strong>${mockData[index].price}</strong></div>
        </div>
    </div>
    `
    html += card
}
getCardEle.innerHTML = html


let btns = document.querySelectorAll(".btn-cart")
for (let i = 0; i < btns.length; i++) {
    let btn = btns[i]
    btn.addEventListener("click", add)
    btn.addEventListener("click", checkout)
}


function add(event) {
    let id = event.target.closest('.btn-cart').dataset.id
    let item = mockData.filter((data) => {
        if (data.id === Number(id)) {
            return data
        }
    })
    setItemInLocal('products', item[0])
    // console.log
}
function setItemInLocal(name, value) {
    if (name == null) return
    const listItems = JSON.parse(
        localStorage.getItem(name) || "[]"
    )
    listItems.push(value)
    localStorage.setItem(name, JSON.stringify(listItems))
};
//Pop-up
function checkout() {
    let popUp = document.getElementById('popup--cart__id');
    popUp.classList.remove("d-none");
    let backGround = document.getElementById('background--popup');
    backGround.classList.add("active");
}


// Working on

function getItemInLocal(cname) {
    const cvalue = localStorage.getItem(cname)
    return cvalue ? JSON.parse(cvalue) : ""
}
// const products = getItemInLocal('products')

// let containerOrderList = document.getElementById("order-list")
// let arrayProducts = ""
// products.forEach(element => {
//     let html = `
//   <li><img src='../${element.srcImg}'><h4>${element.title}</h4><h5>$${element.mainCost}</h5></li>
//   `
//     arrayProducts += html
//     priceTotal += element.mainCost
// });

// containerOrderList.innerHTML = arrayProducts