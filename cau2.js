function sortAsc(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function sortDesc(arr){
    sortAsc(arr);
    const newArray = arr.reverse();
}

function run(){
    const arr = [10, 2, 3, 2, 5];
    sortAsc(arr);

    console.log("Sắp xếp tăng dần:");
    for(let value of arr){
        console.log(value + " ");
    }

    console.log("Sắp xếp giảm dần");
    sortDesc(arr);
    for(let value of arr){
        console.log(value + " ");
    }
}
run();