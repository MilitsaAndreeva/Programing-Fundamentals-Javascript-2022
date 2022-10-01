function solve(number) {
 
    let sumOfdigits = 0;
    let result = '';
 
    for (let i = 1; i <= number; i++) {
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sumOfdigits += Number(i[j]);
        }
        result = sumOfdigits === 5 ||
                 sumOfdigits === 7 ||
                 sumOfdigits === 11;
 
        console.log(result ? `${i} -> True` 
                           : `${i} -> False`);
        sumOfdigits = 0;
    }
}
 
 
 
solve(15);
solve(20);