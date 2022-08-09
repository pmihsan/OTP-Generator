var generateBtn = document.getElementById("generate-btn");
var outputOtp = document.querySelector("#output-otp");

window.onload = () => {
    document.getElementById("n").value = 4;
    outputOtp.value = "Generated OTP: " + randomOTP(4, "123456789");
}


const randomOTP = (num, nums) => {
    let res = "";
    for(let i=0;i<num;i++){
        res += nums[Math.floor(Math.random() * nums.length)];
    }
    return res;
}

generateBtn.addEventListener("click", () => {
    
    var n = document.getElementById("n").value;

    var num = parseInt(n);
    var nums = "0123456789";

    if(n <= 3){
        alert("Number should be Greater than 3");
    }
    else{
        var ans = randomOTP(num, nums);
        outputOtp.value = "Generated OTP: " + ans;
    }
});