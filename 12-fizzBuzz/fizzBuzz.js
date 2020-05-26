function fizzBuzz(start, end) {
  // Insert code here;
  var nums = [start];
  for(var i=1;i<end;i++){
    nums[i]=start+i;
    if(nums[i]%3==0&&nums[i]%5==0) nums[i]="FizzBuzz";
    else if (nums[i]%3==0) nums[i]="Fizz";
    else if (nums[i]%5==0) nums[i]="Buzz";
  }
  console.log(nums);
}

// Do not edit this line;
module.exports = fizzBuzz;
