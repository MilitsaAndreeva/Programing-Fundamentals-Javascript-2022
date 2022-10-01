function centuriesToMinutes (centuriesQuantity){
    let sumYears = 100*centuriesQuantity;
    let sumDays = Math.trunc(365.2422*sumYears);
    let sumHours = 24*sumDays;
    let sumMinutes = 60*sumHours;
    console.log(`${centuriesQuantity} centuries = ${sumYears} years = ${sumDays} days = ${sumHours} hours = ${sumMinutes} minutes`);
}

centuriesToMinutes (5)