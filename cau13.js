function isPalindrome(n){
    const arr = n.toString().split('');
    return arr.reverse().join('');
}
function run(){
    let n = 121;
    isPalindrome(n) == n.toString() ? console.log("true"): console.log("false");
}
run();