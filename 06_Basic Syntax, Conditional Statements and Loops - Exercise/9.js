
function login(input) {
 
    let index = 0;
    let user = input[index];
    index++;
    let writtenPass = input[index];
    index++;
    let correctPass = user.split('').reverse().join('');
    let counter = 0;
 
    // for (let i = user.length - 1; i >= 0; i--) {
    //     let password = user.charAt(i);
    //     result += password;
    // }
 
    while (writtenPass !== correctPass) {
        counter++;
        if (counter === 4) {
            console.log(`User ${user} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
       
        writtenPass = input[index];
        index++;
    }
    if (writtenPass === correctPass) {
        console.log(`User ${user} logged in.`);
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(["momo","omom"]);
// login('sunny', 'rainy', 'cloudy', 'sunny', 'not sunny');