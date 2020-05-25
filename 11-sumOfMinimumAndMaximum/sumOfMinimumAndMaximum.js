function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var largest=nums[0];
  var smallest=nums[0];
  for(var i=0;i<nums.length;i++){
    if(nums[i]<=smallest) smallest=nums[i];
    else if (nums[i]>=largest) largest=nums[i];
  }
  var sum=largest+smallest;
  console.log(sum);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
