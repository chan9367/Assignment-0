class MySolution {
  countDownSum(num) {
    // Insert code here;
    var sum=0;
    for(var i=0;i<num;i++){
      sum+=num-i;
    }
    console.log(sum);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
