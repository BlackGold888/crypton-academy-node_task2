var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fs = require('fs');
var getPermutations = function (arr) {
    var output = [];
    var swapInPlace = function (arrToSwap, indexA, indexB) {
        var temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    };
    var generate = function (n, heapArr) {
        if (n === 1) {
            if (!output.includes(heapArr.slice().join(''))) {
                fs.appendFileSync('test.txt', heapArr.slice().join('') + "\n", function (err) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
                output.push(heapArr.slice().join(''));
            }
            return;
        }
        generate(n - 1, heapArr);
        for (var i = 0; i < n - 1; i++) {
            if (n % 2 === 0) {
                swapInPlace(heapArr, i, n - 1);
            }
            else {
                swapInPlace(heapArr, 0, n - 1);
            }
            generate(n - 1, heapArr);
        }
    };
    generate(arr.length, arr.slice());
    return output;
};
var input = 2;
var array = __spreadArray(__spreadArray([], __spreadArray([], Array(input), true).map(function (i) { return 0; }), true), __spreadArray([], Array(input), true).map(function (_, i) { return i + 1; }), true);
var result = getPermutations(array);
console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u043E\u043A: " + result.length);
