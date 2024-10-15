function medianValue(arr1, arr2){
    const combineArr = [...arr1, ...arr2].sort();
    if(combineArr.length % 2 == 1){
        console.log(combineArr[Math.floor(combineArr.length /2)]);
    }else{
        console.log(((combineArr[combineArr.length / 2]) +(combineArr[combineArr.length / 2 - 1]))/2);
    }
}

function run(){
    const arr1 = [1, 3];
    const arr2 = [2];
    medianValue(arr1, arr2);
    const nums1 = [1,2];
    const nums2 = [3,4];
    medianValue(nums1, nums2);
}
run();