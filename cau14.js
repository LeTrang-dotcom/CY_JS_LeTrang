function findStr(arr) {
    if (arr.length === 0) return;
    const compareArr = [...arr[0]];
    const newArr = [];
    arr.shift();
    arr.forEach((value) => {
        let hasStr = '';
        for(let i = 0; i < compareArr.length; i++){
            if (!value.includes(compareArr[i])){
                break;
            }else {
                hasStr += compareArr[i];
            }
        }
        newArr.push(hasStr);
    })
    findStr(newArr);
    return newArr;
}
function run(){
    const strs = ["flower", "flow", "flight"];
    const strs2 = ["dog", "racecar", "car"];
    const isHasStr = findStr(strs2);
    isHasStr.length > 0 ? console.log(isHasStr[0]): console.log("");
}
run();