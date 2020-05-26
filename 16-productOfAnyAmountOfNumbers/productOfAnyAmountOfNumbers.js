function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var product=args[0];
  for(var i=1;i<args.length;i++){
    product=product*args[i];
  }
  console.log(product);
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
