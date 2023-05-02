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
    <div class="col-lg-3 col-md-4 col-6">
        <div class="product--thumnail">
            <a class="image_thumb scale_hover" href="#" title=${mockData[index].title} style="height: 272px;">
                <img src=${mockData[index].srcImg}
                    alt=${mockData[index].title} data-was-processed="true" style="object-fit: fill;">
            </a>
            <div class="action">
                <button class="btn-proceed-checkout">Mua ngay</button>
                <button class="btn-cart"><i class="fa-solid fa-bag-shopping"
                        style="scale:1.8 ;"></i></button>
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