const fs = require('fs');

const getPermutations = (arr) : string[] => {

    const output: string[] = [];

    const swapInPlace = (arrToSwap, indexA, indexB): void => {
        const temp: any = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    };

    const generate = (n, heapArr): void => {
        if (n === 1) {
            if (!output.includes(heapArr.slice().join(''))) {
                fs.appendFileSync('result.txt', `${heapArr.slice().join('')}\n`,err => {
                    if (err) {
                        console.error(err);
                        return
                    }
                });
                output.push(heapArr.slice().join(''));
            }
            return;
        }

        generate(n - 1, heapArr);

        for (let i = 0; i < n - 1; i++) {
            if (n % 2 === 0) {
                swapInPlace(heapArr, i, n - 1);
            } else {
                swapInPlace(heapArr, 0, n - 1);
            }

            generate(n - 1, heapArr);
        }
    };

    generate(arr.length, arr.slice());

    return output;
};

const input: number = 2;
const array: number[] = [...[...Array(input)].map(i => 0), ...[...Array(input)].map((_, i) => i+1)];

const result: string[] = getPermutations(array);
console.log(`Количество строк: ${result.length}`);