function changeArr(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i].brand == arr[j].brand){
                let temp = arr[i+1];
                arr[i+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for(let i = 0; i < arr.length; i+=2){
        newArr.push(arr.slice(i, i + 2));
    }
    return newArr;
}
function run(){
    const arr = [
        {
            brand: 'HuynDai',
            model: 'Santafe'
        }, {
            brand: 'HuynDai',
            model: 'Sonata'
        }, {
            brand: 'Vinfast',
            model: 'Lux SA'
        },{
            brand: 'Toyota',
            model: 'Camry'
        },
        {
            brand: 'Vinfast',
            model: 'Lux A'
        }
    ];
    console.log(changeArr(arr));
}

run();