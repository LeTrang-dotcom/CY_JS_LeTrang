function run(){
    const matrix = [
        [1,2,3],
        [4,5,6], 
        [9,10,11]
    ]

    const newMatrix = [];
    const reverseMatrix = matrix.reverse();
    for(let i = 0; i < 3; i++){
        const acc = reverseMatrix.reduce((acc, value) => {
            acc.push(value[i]);
            return acc;  
        }, []);
        newMatrix.push(acc);
    }
    
    console.log(newMatrix);
}
run();