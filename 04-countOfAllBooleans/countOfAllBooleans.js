function countOfAllBooleans(arr) {
  // Insert code here;
  var x=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]==true||arr[i]==false) x++;
  }
  console.log(x);
}

// Do not edit this line;
module.exports = countOfAllBooleans;
