function numberPrime(n){
    if(n < 2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++ ){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

function numberPerfect(n){
    let s = 0;
    for(let i = 1; i <= n/2; i++){
        if(n%i == 0){
            s += i;
        }
    }
    if (s == n){
        return true;
    }
    return false;
}
 
function run(n){
    if (numberPrime(n)) {
        console.log(n + " là số nguyên tố");
    } else {
        console.log(n + " không phải là số nguyên tố");
    }
    
    if(numberPerfect(n)){
        console.log(n + " là số hoàn hảo");
    }else{
        console.log(n + " không phải số hoàn hảo");
    }
}

run(11);
run(28);
run(10);