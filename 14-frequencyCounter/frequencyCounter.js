function frequencyCounter(word) {
  // Insert code here;
  var x = {};
  for(var i=0;i<word.length;i++){
    x[word[i]]=0;
  }
  for(var i=0;i<word.length;i++){
    x[word[i]]++;
  }
  console.log(x);
}

// Do not edit this line;
module.exports = frequencyCounter;
