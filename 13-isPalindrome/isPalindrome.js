function isPalindrome(word) {
  // Insert code here;
  var x=true;
  for(var i=0;i<word.length;i++){
    if(word[i]!=word[word.length-1-i]) x=false;
  }
  console.log(x);
}

// Do not edit this line;
module.exports = isPalindrome;
