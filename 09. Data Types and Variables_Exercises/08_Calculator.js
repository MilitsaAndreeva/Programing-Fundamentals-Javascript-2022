function solve(firstNum, operator, secondNum){
    let res = 0;
    switch (operator){
        case '+': res = firstNum+secondNum;
        break;
        case '-': res = firstNum-secondNum;
        break;
        case '*': res = firstNum*secondNum;
        break;
        case '/': res = firstNum/secondNum;
        break;
    }
    console.log(res.toFixed(2));
}
solve(25.5,

    '-',
    
    3)