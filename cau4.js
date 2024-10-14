function checkEmail(email){
    const validate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if(!validate.test(email)){
        console.log("email không hợp lệ");
    }else{
        console.log("email hợp lệ");
    }
}

checkEmail("123.vn");
checkEmail("test@gmail.com");