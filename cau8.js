function copyItem(arr, item){
    return arr.push(item);
}
function copy(callback, arr){
    const arrCopy = [];
    arr.forEach(element => {
        callback(arrCopy, element);
    });
    console.log(arr);
}
function run(){
    const arr = [1, 2, [3, 5]];
    copy(copyItem, arr);
}
run();