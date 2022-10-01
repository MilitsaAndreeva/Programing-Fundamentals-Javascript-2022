function integerAndFloat (first, second, third){
    let sum = first + second + third;
    let type = '';

    
    if (Number.isInteger (sum)){
        console.log(`${sum} - Integer`);
    }
    else{
        console.log(`${sum} - Float`);
    }

}
integerAndFloat (9, 100, 1.1)