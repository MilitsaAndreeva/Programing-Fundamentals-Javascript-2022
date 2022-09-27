function solve(n1, n2, n3) {
    let max = Math.max(n1, n2, n3);
    let min = Math.min(n1, n2, n3);
    let mid = 0;

    if (n1 < max && n1 > min){
        mid= n1
    } else if (n2 < max && n2 > min){
        mid = n2
    } else{
        mid = n3
    }
    
 console.log (max);
 console.log (mid);
 console.log(min);
}
 solve(0,2,-3)

//  function sortNumbers(a,b,c) {
//     let newArr = [a,b,c]
//     newArr.sort(function (a, b) { return b - a });
//     for (let i = 0; i < newArr.length; i++) {
//         console.log(newArr[i]);
//     }
// }
// sortNumbers(2,1,3)