function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let x = new Set();
  for (var i=0;i<args.length;i++){
    for (var j of args[i]){
      x.add(j);
    }
  }
  console.log(x);
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
