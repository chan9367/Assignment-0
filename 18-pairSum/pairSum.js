function pairSum(nums, target) {
  // Insert code here;
  var x=false;
  try{
    if (nums.length<2) err;
    for(var i=0;i<nums.length;i++){
      for(var j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target)x=true;
      }
    }
    console.log(x);
  }
  catch(err){
    console.log("ERROR: nums array length needs to be 2 or more")
  }
}

// Do not edit this line;
module.exports = pairSum;
