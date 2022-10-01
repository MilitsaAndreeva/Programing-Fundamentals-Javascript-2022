function solve(lostFights, helmet,sword,shield, armor){
    let brokenShields = 0;
    let expenses = 0;

    for (let currentFight = 1; currentFight <=lostFights; currentFight++){
        if (currentFight%2===0){
            expenses+=helmet
        }
        if (currentFight%3===0){
            expenses+=sword
        }
        if (currentFight%6===0){
            expenses+=shield;
            brokenShields++;
            if (brokenShields%2 ===0){
                expenses+=armor
            }
        }

    }

    
    

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve (7, 2,    3,   4, 5)