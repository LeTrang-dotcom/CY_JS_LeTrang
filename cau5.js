function processStr(str){
    for(let value of str){
        switch(value){
            case '@':
                str = str.replace(value,'');
                break;
            case '#':  
                str = str.replace(value,'');
                break;
            case '!':
                str = str.replace(value,'');
                break;
            case '{':
                str = str.replace(value,'');
                break;
            case '}':
                str = str.replace(value,'');
                break;
            case '[':
                str = str.replace(value,'');
                break;
            case ']':
                str = str.replace(value,'');
                break;
            case '(':
                str = str.replace(value,'');
                break;
            case ')':
                str = str.replace(value,'');
                break;
        }
    }
    str = str.trim();
    return str;
}

function cauA(str){
    const arrStr = str.split(' ');
    for(let i = 0; i < arrStr.length; i++){
        arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
    }
    return arrStr;
}

function valueAverage(str){
    let d =0;
    let s = 0;
    const arrStr = str.split(' ');
    for(let value of arrStr){
        if(!isNaN(value)){
            console.log(value);
            s += +value;
            d++;
        }
    }
    console.log(s/d);
}

function run(){
    let str = " Xin 20 c{h}ào 60  #Cy30@!Tech(VN)  100 ";
    str = str.replace(/ +/g, ' ');
    let proStr = processStr(str);
    reverseCauA = cauA(proStr).reverse();
    valueAverage(proStr);
    console.log(reverseCauA);
}
run();