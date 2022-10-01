function solve (num) {
let stringNum = num.toString()
let sum = 0;
for (let i = 0; i<stringNum.length; i++) {
    let currentNum = Number(stringNum[i]);
    sum+=currentNum;
}
let result = sum.toString().includes('9');
console.log(result ?
    `${num} Amazing? True`:
    `${num} Amazing? False`);
}
solve(999)