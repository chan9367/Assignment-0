function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  var x=0;
  for(var i=0;i<nums.length;i++){
    if(nums[i]%2==0) x++;
  }
  console.log(x);
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
