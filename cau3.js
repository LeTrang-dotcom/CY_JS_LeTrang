function run(){
    const rowStr = "Hello CY VietNam";
    let reverseStr = "";
    for(let value of rowStr){
        reverseStr = value + reverseStr;
    }
    console.log(reverseStr);
}

run();