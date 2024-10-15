function count(arr, n){
    let index = 0;
    const countFunc = arr.map((element => {
        ++index;
        return n + index;
    }));
    return countFunc;
}

function run(){
    let n = -2;
    const arr = ["arr", "arr", "arr", "arr", "arr"];
    const newArr = count(arr, n);
    newArr.unshift(n);
    console.log(newArr);
}
run();