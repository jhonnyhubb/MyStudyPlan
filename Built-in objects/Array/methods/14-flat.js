const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = arr => [].concat(...arr);

const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

// flatDeep(arr, Infinity);
// // [1, 2, 3, 4, 5, 6]

// console.log(arr)
// console.log(flatDeep(arr, Infinity));
// // [1, 2, 3, 4, 5, 6]

// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      // pop value from stack
      const next = stack.pop();
      if (Array.isArray(next)) {
        // push back array items, won't modify the original input
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    // reverse to restore input order
    return res.reverse();
  }
  
  const arr = [1, 2, [3, 4, [5, 6]]];
  console.log(flatten(arr));
  // [1, 2, 3, 4, 5, 6]
  
function* flatten(array, depth) {
    if (depth === undefined) {
      depth = 1;
    }
  
    for (const item of array) {
      if (Array.isArray(item) && depth > 0) {
        yield* flatten(item, depth - 1);
      } else {
        yield item;
      }
    }
  }
  
  const arr = [1, 2, [3, 4, [5, 6]]];
  const flattened = [...flatten(arr, Infinity)];
  // [1, 2, 3, 4, 5, 6]
  
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]

