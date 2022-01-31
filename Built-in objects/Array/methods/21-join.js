var a = ['Wind', 'Water', 'Fire'];
console.log(a.join());      // 'Wind,Water,Fire'
console.log(a.join(', '));  // 'Wind, Water, Fire'
console.log(a.join(' + ')); // 'Wind + Water + Fire'
console.log(a.join(''));    // 'WindWaterFire'


function f(a, b, c) {
    var s = Array.prototype.join.call(arguments);
    console.log(s); // '1,a,true'
  }
  f(1, 'a', true);
  //expected output: "1,a,true"
  