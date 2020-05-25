function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var x=0;
  for(var i=0;i<nums.length;i++){
    if(nums[i]>=start&&nums[i]<=end) x++;
  }
  console.log(x);
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
