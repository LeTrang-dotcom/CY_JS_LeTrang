function elementLength(arr){
    return arr.map((element) => element.length);
}

function findMaxLength(arr){
    const indexMaxLength = elementLength(arr).indexOf(Math.max(...elementLength(arr)));
    console.log(arr[indexMaxLength]);
}
function run(){
    const str = "Tập đoàn Hyosung (Hàn Quốc) dự kiến đầu tư thêm 4 tỷ USD, nâng tổng số vốn rót vào Việt Nam lên gấp đôi. Tại cuộc gặp Thủ tướng Phạm Minh Chính chiều 14/10, ông Cho Hyun-joon, Chủ tịch Tập đoàn Hyosung (Hàn Quốc), khẳng định môi trường đầu tư của Việt Nam rất đáng tin cậy. Ông tin rằng Việt Nam sẽ trở thành trung tâm sản xuất của châu Á.";
    const arr = str.replace(/,/g, '').split(' ');
    findMaxLength(arr);
}
run();