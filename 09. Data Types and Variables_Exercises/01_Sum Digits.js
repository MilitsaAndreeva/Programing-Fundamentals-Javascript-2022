function solve (num){
let stringNum = num.toString();
let sum = 0;
for (let i = 0; i<stringNum.length; i++) {
    let currentNum = Number(stringNum[i])
    sum+=currentNum;
    
}
console.log(sum);
}
solve(245678)
