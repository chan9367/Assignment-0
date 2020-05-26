class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var left=0;
    var right=nums.length-1;
    while(left<=right){
      var x = Math.floor(left+right/2);
      if(nums[x]<target) left=x+1;
      else if(nums[x]>target) right=x-1;
      else if(nums[x]==target){this.flag=true; left=right+1;}
      else return this.flag=false;
    }
    console.log(this.flag);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
