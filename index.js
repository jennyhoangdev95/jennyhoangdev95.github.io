$(document).ready(function(){
    $(".sale-card").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    })
});




    const CardProduct = document.getElementById("#new-product__card")

    const newProductdata = [
        {
            id: 1,
            srcImg: "https://bizweb.dktcdn.net/thumb/large/100/459/658/products/4-jpeg-8f345d84-332c-423c-a8cb-6b2a997b0c49.jpg?v=1658809804000",
            description: "Kem dưỡng da V7 Toning Light",
            price: "80.000&#8363"
        },
        {
            id: 2,
            srcImg: "https://bizweb.dktcdn.net/thumb/large/100/459/658/products/3-jpeg-4e0564b8-e327-4387-90af-c5669c2ea1dd.jpg?v=1658809551000",
            description: "Kem dưỡng da Collagen",
            price: "230.000&#8363"
        },
        {
            id: 3,
            srcImg: "https://bizweb.dktcdn.net/thumb/large/100/459/658/products/4-jpeg-1bcb52e4-cbfb-49b9-9bd0-51f8895d65fd.jpg?v=1657705523000",
            description: "Kem dưỡng da Nivea",
            price: "Liên hệ"
        },
        {
            id: 4,
            srcImg: "https://bizweb.dktcdn.net/thumb/large/100/459/658/products/3-jpeg-b506e533-376d-4e9a-b19b-38e195ad6369.jpg?v=1658811448000",
            description: "Kem dưỡng da Redwin",
            price: "220.000&#8363"
        },
        {
            id: 5,
            srcImg: "https://bizweb.dktcdn.net/thumb/large/100/459/658/products/2-jpeg-8597db11-c1ad-44b7-920f-2fb621685bf4.jpg?v=1657704350000",
            description: "Kem dưỡng da Aura Perfect",
            price: "230.000&#8363"
        }
    ]
    let html = ""
    for (let index = 0; index < newProductdata.length; index++) {
        const card = `
        <div class="sale__card-slider">
        <div class="sale__card-slider--img">
          <a href="#">
            <img class="card-slider--img" src=${newProductdata[index].srcImg} 
            alt="new product"
            />
          </a>
          <div class="card-slider--btn">
            <button class="btn slider--button">Mua ngay</button>
            <button onclick="addProduct()" class="btn slider--button-icon">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path d="M17.5373 17.4929L16.6053 6.23836C16.5473 5.51328 15.9074 4.94527 15.1486 4.94527H13.3077V4.86598C13.3077 2.73426 11.498 1 9.27364 1C7.04924 1 5.23958 2.73426 5.23958 4.86598V4.94527H3.39869C2.63989 4.94527 1.99998 5.51324 1.94206 6.23684L1.00986 17.4944C0.937715 18.3958 1.26397 19.2932 1.90501 19.9564C2.54598 20.6196 3.45462 21 4.39803 21H14.1493C15.0926 21 16.0013 20.6196 16.6423 19.9564C17.2834 19.2932 17.6096 18.3958 17.5373 17.4929ZM6.46199 4.86598C6.46199 3.38023 7.7233 2.17148 9.27364 2.17148C10.824 2.17148 12.0853 3.38027 12.0853 4.86598V4.94527H6.46199V4.86598ZM15.7454 19.1604C15.329 19.5912 14.7621 19.8285 14.1493 19.8285H4.39803C3.78515 19.8285 3.21829 19.5912 2.80183 19.1603C2.38534 18.7295 2.18182 18.1696 2.22861 17.5855L3.16081 6.32797C3.17027 6.20953 3.27482 6.11676 3.39873 6.11676H5.23962V7.55953C5.23962 7.88301 5.51329 8.14527 5.85083 8.14527C6.18837 8.14527 6.46204 7.88301 6.46204 7.55953V6.11676H12.0854V7.55953C12.0854 7.88301 12.359 8.14527 12.6966 8.14527C13.0341 8.14527 13.3078 7.88301 13.3078 7.55953V6.11676H15.1486C15.2725 6.11676 15.377 6.20953 15.3867 6.32949L16.3187 17.584C16.3655 18.1696 16.1619 18.7294 15.7454 19.1604Z" fill="#333333">
                </path>
                <path d="M17.5373 17.4929L17.7865 17.473L17.7865 17.4723L17.5373 17.4929ZM16.6053 6.23836L16.3561 6.25832L16.3562 6.25899L16.6053 6.23836ZM13.3077 4.94527H13.0577V5.19527H13.3077V4.94527ZM5.23958 4.94527V5.19527H5.48958V4.94527H5.23958ZM1.94206 6.23684L2.19121 6.25747L2.19127 6.25678L1.94206 6.23684ZM1.00986 17.4944L0.760714 17.4738L0.760659 17.4745L1.00986 17.4944ZM1.90501 19.9564L2.08478 19.7826L2.08477 19.7826L1.90501 19.9564ZM16.6423 19.9564L16.4626 19.7827H16.4626L16.6423 19.9564ZM12.0853 4.94527V5.19527H12.3353V4.94527H12.0853ZM6.46199 4.94527H6.21199V5.19527H6.46199V4.94527ZM15.7454 19.1604L15.9252 19.3341L15.9252 19.3341L15.7454 19.1604ZM2.80183 19.1603L2.9816 18.9866L2.98158 18.9866L2.80183 19.1603ZM2.22861 17.5855L1.97946 17.5649L1.97941 17.5656L2.22861 17.5855ZM3.16081 6.32797L3.40996 6.3486L3.41002 6.34787L3.16081 6.32797ZM5.23962 6.11676H5.48962V5.86676H5.23962V6.11676ZM6.46204 6.11676V5.86676H6.21204V6.11676H6.46204ZM12.0854 6.11676H12.3354V5.86676H12.0854V6.11676ZM13.3078 6.11676V5.86676H13.0578V6.11676H13.3078ZM15.3867 6.32949L15.1375 6.34948L15.1375 6.35012L15.3867 6.32949ZM16.3187 17.584L16.5679 17.5641L16.5678 17.5634L16.3187 17.584ZM17.7865 17.4723L16.8545 6.21773L16.3562 6.25899L17.2882 17.5135L17.7865 17.4723ZM16.8545 6.2184C16.7853 5.35469 16.0288 4.69527 15.1486 4.69527V5.19527C15.786 5.19527 16.3092 5.67187 16.3561 6.25832L16.8545 6.2184ZM15.1486 4.69527H13.3077V5.19527H15.1486V4.69527ZM13.5577 4.94527V4.86598H13.0577V4.94527H13.5577ZM13.5577 4.86598C13.5577 2.58626 11.626 0.75 9.27364 0.75V1.25C11.3701 1.25 13.0577 2.88225 13.0577 4.86598H13.5577ZM9.27364 0.75C6.9213 0.75 4.98958 2.58627 4.98958 4.86598H5.48958C5.48958 2.88225 7.17717 1.25 9.27364 1.25V0.75ZM4.98958 4.86598V4.94527H5.48958V4.86598H4.98958ZM5.23958 4.69527H3.39869V5.19527H5.23958V4.69527ZM3.39869 4.69527C2.51868 4.69527 1.76189 5.35447 1.69286 6.21689L2.19127 6.25678C2.23808 5.67201 2.7611 5.19527 3.39869 5.19527V4.69527ZM1.69292 6.21621L0.760715 17.4738L1.25901 17.515L2.19121 6.25747L1.69292 6.21621ZM0.760659 17.4745C0.682657 18.449 1.03547 19.4165 1.72526 20.1301L2.08477 19.7826C1.49246 19.1698 1.19277 18.3426 1.25906 17.5144L0.760659 17.4745ZM1.72524 20.1301C2.41451 20.8433 3.38857 21.25 4.39803 21.25V20.75C3.52066 20.75 2.67744 20.3959 2.08478 19.7826L1.72524 20.1301ZM4.39803 21.25H14.1493V20.75H4.39803V21.25ZM14.1493 21.25C15.1587 21.25 16.1328 20.8433 16.8221 20.1302L16.4626 19.7827C15.8698 20.3959 15.0266 20.75 14.1493 20.75V21.25ZM16.8221 20.1302C17.5119 19.4165 17.8646 18.4489 17.7865 17.473L17.2881 17.5128C17.3545 18.3426 17.0548 19.1699 16.4626 19.7827L16.8221 20.1302ZM6.71199 4.86598C6.71199 3.52823 7.85124 2.42148 9.27364 2.42148V1.92148C7.59536 1.92148 6.21199 3.23224 6.21199 4.86598H6.71199ZM9.27364 2.42148C10.6961 2.42148 11.8353 3.52827 11.8353 4.86598H12.3353C12.3353 3.23228 10.952 1.92148 9.27364 1.92148V2.42148ZM11.8353 4.86598V4.94527H12.3353V4.86598H11.8353ZM12.0853 4.69527H6.46199V5.19527H12.0853V4.69527ZM6.71199 4.94527V4.86598H6.21199V4.94527H6.71199ZM15.5657 18.9866C15.1975 19.3675 14.6961 19.5785 14.1493 19.5785V20.0785C14.8282 20.0785 15.4604 19.815 15.9252 19.3341L15.5657 18.9866ZM14.1493 19.5785H4.39803V20.0785H14.1493V19.5785ZM4.39803 19.5785C3.85119 19.5785 3.34975 19.3675 2.9816 18.9866L2.62207 19.3341C3.08682 19.8149 3.7191 20.0785 4.39803 20.0785V19.5785ZM2.98158 18.9866C2.61376 18.6061 2.43689 18.1163 2.47781 17.6055L1.97941 17.5656C1.92675 18.2229 2.15691 18.8528 2.62208 19.3341L2.98158 18.9866ZM2.47776 17.6062L3.40996 6.3486L2.91167 6.30734L1.97946 17.5649L2.47776 17.6062ZM3.41002 6.34787C3.40923 6.3578 3.40455 6.36337 3.40281 6.36492C3.40117 6.36638 3.39965 6.36676 3.39873 6.36676V5.86676C3.15347 5.86676 2.93214 6.05091 2.91161 6.30807L3.41002 6.34787ZM3.39873 6.36676H5.23962V5.86676H3.39873V6.36676ZM4.98962 6.11676V7.55953H5.48962V6.11676H4.98962ZM4.98962 7.55953C4.98962 8.031 5.38535 8.39527 5.85083 8.39527V7.89527C5.64122 7.89527 5.48962 7.73502 5.48962 7.55953H4.98962ZM5.85083 8.39527C6.3163 8.39527 6.71204 8.031 6.71204 7.55953H6.21204C6.21204 7.73502 6.06043 7.89527 5.85083 7.89527V8.39527ZM6.71204 7.55953V6.11676H6.21204V7.55953H6.71204ZM6.46204 6.36676H12.0854V5.86676H6.46204V6.36676ZM11.8354 6.11676V7.55953H12.3354V6.11676H11.8354ZM11.8354 7.55953C11.8354 8.031 12.2311 8.39527 12.6966 8.39527V7.89527C12.487 7.89527 12.3354 7.73502 12.3354 7.55953H11.8354ZM12.6966 8.39527C13.1621 8.39527 13.5578 8.031 13.5578 7.55953H13.0578C13.0578 7.73502 12.9062 7.89527 12.6966 7.89527V8.39527ZM13.5578 7.55953V6.11676H13.0578V7.55953H13.5578ZM13.3078 6.36676H15.1486V5.86676H13.3078V6.36676ZM15.1486 6.36676C15.1476 6.36676 15.1459 6.36632 15.1441 6.36472C15.1421 6.36296 15.1381 6.35778 15.1375 6.34948L15.6359 6.30951C15.6152 6.05199 15.395 5.86676 15.1486 5.86676V6.36676ZM15.1375 6.35012L16.0695 17.6046L16.5678 17.5634L15.6358 6.30886L15.1375 6.35012ZM16.0695 17.6039C16.1104 18.1164 15.9334 18.6061 15.5657 18.9866L15.9252 19.3341C16.3904 18.8527 16.6206 18.2228 16.5679 17.5641L16.0695 17.6039Z" fill="#333333">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div class="productName-sale"> 
          <a href="#">${newProductdata[index].description}</a>
          <div class="card-price">
            <span class="card--price">${newProductdata[index].price}</span>
          </div>
        </div>   
      </div>
    `;
    html += card
    }

    $(document.getElementById("new-product__card")).ready(function(){
      $(".new-card").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplaySpeed: 1000,
          prevArrow:
          "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow:
          "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
      });
  });

$(document).ready(function(){
  $(".tab-content").hide();
  $(".tab-content:first-child").fadeIn();
  $(".allProduct__tabs li").click(function(){
    $(".allProduct__tabs li").removeClass("all-product__active");
    $(this).addClass("all-product__active");

    let id_Tab_Content = $(this).children("a").attr("href");
    $(".tab-content").hide();
    $(id_Tab_Content).fadeIn();
    return false;
  });
});


$(document).ready(function(){
  $(".block-blog").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 1000,
      prevArrow:
      "<button type='button' class='slick-prev blog-left pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
      "<button type='button' class='slick-next blog-right pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  })
});

