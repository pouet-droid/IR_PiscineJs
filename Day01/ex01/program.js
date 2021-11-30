///////////////////////////////////////////////////////////////////////////////////////////
//      Retourne le premier chiffre écrit plusieurs fois (2 c'est plusieurs aussi)       //
///////////////////////////////////////////////////////////////////////////////////////////
//Test : console.log(firstDuplicateValue([ 1, 2, 3, 4, 5, 2]))
function firstDuplicateValue(array){
    let number=[];
    for (let i = 0; i < array.length; i++) {
        if (number.indexOf(array[i]) !== -1) {
            return (array[i]);
        }
        number.push(array[i]);
    }
    return -1
}
exports.firstDuplicateValue =  firstDuplicateValue;