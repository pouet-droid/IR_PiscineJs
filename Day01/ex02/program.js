/////////////////////////////////////////////////////////////////////////////////////////////
// Retourne la somme minimal impossible à avoir avec l'agent contenue dans le porte monaie //
/////////////////////////////////////////////////////////////////////////////////////////////
//Test : console.log(pocketMoney(coins))
function pocketMoney(coins){
    let minValue = 0 ;
    let value = coins.sort(function(a, b) { return a - b;})
    for (let i = 0; i < value.length; i++) {
        if(value[i] > minValue +1){
            return minValue + 1;
        }
        minValue += value[i];
    }
    return minValue + 1;
}
coins = [ 5, 7, 1, 1, 2, 3, 22]
pocketMoney(coins);

exports.pocketMoney =  pocketMoney;