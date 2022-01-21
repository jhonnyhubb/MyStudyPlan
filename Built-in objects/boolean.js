var x = new Boolean(false);
if (x) 
    console.log(`value of var x is ${x}`)
  // this code is executed

var y = false;
if (y) 
    console.log(`value of var x is ${y}`)
  // this code is executed


  var myFalse = new Boolean(false)   // initial value of false
  console.log(myFalse)
  var g = Boolean(myFalse)       // initial value of true
  console.log(g)
  var myString = new String('Hello') // string object
  console.log(myString)
  var s = Boolean(myString)      // initial value of true
  console.log(s)

  //Do not use a Boolean object in place of a Boolean primitive.

    if ([]) { console.log("[] is truthy")}         // logs "[] is truthy"
    if ([] == false) { console.log("[] == false")} // logs "[] == false"
//Constructor:

    //Creating Boolean objects with an initial value of false
var bNoParam = new Boolean();
console.log(bNoParam)
var bZero = new Boolean(0);
console.log(bZero)
var bNull = new Boolean(null);
console.log(bNull)
var bEmptyString = new Boolean('');
console.log(bEmptyString)
var bfalse = new Boolean(false);
console.log(bfalse)
    //Creating Boolean objects with an initial value of true
var btrue = new Boolean(true);
console.log(btrue)
var btrueString = new Boolean('true');
console.log(btrueString)
var bfalseString = new Boolean('false');
console.log(bfalseString)
var bSuLin = new Boolean('Su Lin');
console.log(bSuLin)
var bArrayProto = new Boolean([]);
console.log(bArrayProto)
var bObjProto = new Boolean({});
console.log(bObjProto)
