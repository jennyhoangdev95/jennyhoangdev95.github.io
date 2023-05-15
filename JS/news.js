const getNewsEle = document.getElementById("newsCard")
const mockData = [
    {
        id: 1,
        title: "Bảo vệ tóc cẩn thận",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/khac-phuc-rung-toc-thumb-1000x600-f8df040e-7f86-4801-952f-c82f3b362e8b.jpg?v=1657766349023",
        content: "Nếu như da cần bôi chống nắng trước khi ra ngoài, thì tóc cũng cần được săn sóc cẩn thận nhằm giảm bớt ảnh hưởng của các yếu tố gây hại từ môi trường như khói bụi, ánh nắng mặt..."
    },
    {
        id: 2,
        title: "Bổ sung tinh chất chuyên sâu",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/images990537-4-00560611-cf53-4ef5-a5cd-f159e5374c28.jpg?v=1657766317287",
        content: "Lúc tóc đã khô hoàn toàn, bạn dùng tay (hoặc lược) xới nhẹ mái tóc để từng sợi tóc bung rời đem lại cảm giác bồng bềnh. Trước khi đi ngủ, bạn nên “ru êm” mái tóc bằng chút dầu..."
    },
    {
        id: 3,
        title: "Để tóc khô tự nhiên",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/cach-cham-soc-toc-layer-nu-3-af83fa13-b1bb-4d58-b648-095f97c2c69b.jpg?v=1657766277457",
        content: "Sấy tóc là lựa chọn số 1 của nhiều chị em để thoát khỏi tình trạng ướt át, khó chịu, nhưng hơi nóng thổi trực tiếp vào tóc sẽ khiến tóc dễ bị khô và xơ. Do đó, nếu chưa..."
    },
    {
        id: 4,
        title: "Cung cấp thêm dưỡng chất chăm sóc tóc",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/rua-mat-sai-cach-3-1000x600.jpeg?v=1657766246763",
        content: "Hầu hết mọi người đều sẽ dừng ở bước ủ dầu xả vì cho rằng, đến đây là đủ để có mái tóc khỏe đẹp. Nhưng một số chuyên gia cho rằng, dưỡng tóc mềm mượt từ thiên nhiên thông..."
    },
    {
        id: 5,
        title: "Thoa dầu xả dưỡng ẩm cho tóc",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/khac-phuc-rung-toc-thumb-1000x600.jpg?v=1657766218690",
        content: "Sau bước gội đầu sạch sẽ là đến công đoạn xả tóc. Dầu xả cung cấp độ ẩm giúp mái tóc bóng mượt tức thì và quan trọng hơn, dưỡng chất trong dầu xả giúp phục hồi lớp biểu bì..."
    },
    {
        id: 6,
        title: "Gội đầu sạch sẽ",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/images990537-4.jpg?v=1657766190380",
        content: "Làm gì thì làm cũng không được bỏ qua công đoạn gội đầu bởi chỉ khi tóc sạch thì nhìn mới mượt mà; da đầu phải sạch thì chân tóc mới khỏe mạnh. Nhưng không phải vì thế mà bạn..."
    },
    {
        id: 7,
        title: "Tẩy tế bào chết cho da đầu",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/cach-cham-soc-toc-layer-nu-3.jpg?v=1657766154853",
        content: "Dầu nhờn, bụi bẩn, vảy chết hay tàn dư của sản phẩm tạo kiểu tóc bám ở da đầu, bưng bít chân tóc lâu ngày không chỉ khiến bạn cảm thấy ngứa ngáy mà còn là nguyên nhân làm suy..."
    },
    {
        id: 8,
        title: "Làn da trắng sáng hơn nhờ đắp mặt với bia",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/13-626b75ad-25fe-4dd8-93c0-88e966be9bf8.jpg?v=1657765291613",
        content: "Bia không chỉ là đồ uống được nam giới ưa chuộng mà còn là nguyên liệu làm đẹp yêu thích của nhiều chị em. Trong men bia chứa nhiều vitamin nhóm B giúp cấp ẩm da, se khít lỗ chân..."
    },
    {
        id: 9,
        title: "Cách làm da mặt trắng hồng với cà chua",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/nam-da-sau-sinh-can-lam-gi-de-phong-tranh-0a230f9a-87d2-4c45-890d-1c556c5b9d8d.jpg?v=1657765271620",
        content: "Nguyên liệu tiếp theo được nhắc đến trong 15 cách làm đẹp da mặt tại nhà là cà chua. Đây là thực phẩm “ngon – bổ – rẻ” và vô cùng tốt cho da. Thành phần sắt, kali, beta-carotene và..."
    },
    {
        id: 10,
        title: "Lá tía tô giúp làm trắng da",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/mypham-sk-6-56d2fa18-bca0-45f6-90c7-6a483ec7b5f9.jpg?v=1657765234467",
        content: "Ít ai biết lá tía tô cũng là một nguyên liệu làm trắng da cực kỳ hiệu quả. Tương tự như những loại rau củ khác, lá tía tô chứa nhiều vitamin và khoáng chất vi lượng. Ép lấy nước..."
    },
    {
        id: 11,
        title: "Mẹo làm trắng da bằng nha đam",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/image001-xwmx-59750f5c-b852-46d6-8360-d3317b2f1c36.jpg?v=1657765209740",
        content: "Nha đam thường được sử dụng để làm nước uống giúp thanh lọc cơ thể, giải nhiệt. Trong nguyên liệu này cũng chứa nhiều khoáng chất có khả năng làm đẹp da, se khít lỗ chân lông, hạn chế mụn..."
    },
    {
        id: 12,
        title: "Chăm sóc da mặt bằng dầu dừa",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/cham-soc-da-dau-19e272c6-fa74-4e3c-a910-4c202b628c1b.png?v=1657765161207",
        content: "Tương tự như dầu oliu thì dầu dừa cũng là nguyên liệu có khả năng cấp ẩm và dưỡng trắng da hiệu quả. Thoa dầu dừa hoặc đắp mặt với dầu dừa sẽ giúp làm sạch da, ngăn ngừa quá..."
    },
    {
        id: 13,
        title: "Làm đẹp da bằng mật ong",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/cham-soc-da-dau-9c4d786d-6779-4525-a07b-6981a7fd79ba.png?v=1657765131317",
        content: "Mật ong là nguyên liệu tự nhiên vô cùng quen thuộc và được sử dụng rất nhiều trong cuộc sống. Trong mật ong chứa rất nhiều vitamin, khoáng chất tốt cho cả làn da lẫn sức khỏe. Nguyên liệu này..."
    },
    {
        id: 14,
        title: "Mẹo làm đẹp da mặt bằng tinh bột nghệ",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/13-ef040bd5-3ac9-49c6-8ae7-4af5c88dc696.jpg?v=1657765107770",
        content: "Tinh bột nghệ được xem là “thần dược” giúp da nhanh liền sẹo, giảm thâm nám. Chúng chứa nhiều curcumin, đây là thành phần có khả năng chống oxy hóa, nuôi dưỡng cho da khỏe mạnh. Curcumin cũng giúp loại..."
    },
    {
        id: 15,
        title: "Sử dụng mặt nạ từ các loại bột tự nhiên",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/cach-cham-soc-da-kho-hieu-qua-427a8dea-f450-4185-8a84-f29f2b40eb9a.png?v=1657765067970",
        content: "Một số loại mặt nạ làm từ nguyên liệu thiên nhiên như bột đậu đỏ, bột cám gạo, bột yến mạch… thường có tác dụng tẩy tế bào chết cực kỳ hiệu quả. Các loại mặt nạ này thường chứa..."
    },
    {
        id: 16,
        title: "Cách làm đẹp da mặt bằng sữa chua không đường",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/nam-da-sau-sinh-can-lam-gi-de-phong-tranh.jpg?v=1657764708570",
        content: "Sữa chua không đường vừa là nguyên liệu làm đẹp rất rẻ tiền và thông dụng. Chỉ với 2-3 lần đắp sữa chua không đường/ 1 tuần là bạn đã có thể nhận thấy ngay sự khác biệt rõ rệt..."
    },
    {
        id: 17,
        title: "Làm trắng da với mặt nạ trứng gà",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/mypham-sk-6-921f44d8-35ab-4f41-8671-656050695463.jpg?v=1657764650373",
        content: "Trong danh sách 15 cách làm đẹp da mặt tại nhà không thể bỏ qua mặt nạ trứng gà. Lòng trứng gà có chứa vitamin A, C, E và hàm lượng Enzyme Lysozyme giúp nuôi dưỡng làm trắng da, se khít..."
    },
    {
        id: 18,
        title: "Chăm sóc da với dầu oliu",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/mypham-sk-6.jpg?v=1657764585937",
        content: "Phụ nữ Hy Lạp thường xem dầu oliu như một nguyên liệu không thể thiếu trong quá trình làm đẹp. Họ dùng dầu oliu để làm sạch da, chữa vết bỏng, dưỡng tóc… Trong dầu oliu chứa rất nhiều chất..."
    },
    {
        id: 19,
        title: "Mẹo làm đẹp da mặt với nước hoa hồng",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/image001-xwmx.jpg?v=1657764528200",
        content: "Thay vì bỏ đi, bạn có thể tận dụng những cánh hồng trong vườn nhà để làm nước hoa hồng chăm sóc da. Chiết xuất từ cánh hoa có tác dụng chống viêm, se khít lỗ chân lông và dưỡng..."
    },
    {
        id: 20,
        title: "Làm đẹp bằng nước vo gạo",
        date: "Thứ Năm, 14/07/2022",
        srcImg: "https://bizweb.dktcdn.net/100/459/658/articles/cham-soc-da-dau.png?v=1657764389520",
        content: "Dùng nước vo gạo là một trong 15 cách làm đẹp da mặt phổ biến nhất hiện nay. Các nghiên cứu cho thấy bên trong nước vo gạo chứa một lượng lớn vitamin C và vitamin B5 cùng các khoáng..."
    },
]
let html = ""
for (let index = 0; index < mockData.length; index++) {
    const card = `
    <div class="col-lg-3 col-md-6">
    <div class="item-blog">
        <div class="blog-thumb">
            <a class="thumb" href="#" title=${mockData[index].title}>
                <img class="lazyload loaded"
                    src=${mockData[index].srcImg}
                    data-src=${mockData[index].srcImg}
                    alt=${mockData[index].title} data-was-processed="true">
            </a>
        </div>
        <div class="blog-content">
            <div class="time-post f">
            ${mockData[index].date}
            </div>
            <h3>
                <a href="#" title=${mockData[index].title}>${mockData[index].title}</a>
            </h3>
            <p class="justify">${mockData[index].content}
            </p>
        </div>
    </div>
</div>
    `
    html += card
}
getNewsEle.innerHTML = html


