var num = 4;
var nums = "0123456789";


const randomOTP = () => {
    let res = "";
    for(let i=0;i<num;i++){
        res += nums[Math.floor(Math.random() * nums.length)];
    }
    return res;
}


console.log(randomOTP());
