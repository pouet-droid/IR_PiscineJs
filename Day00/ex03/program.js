///////////////////////////////////////////////////////////////////////////////////////////
//          Retourne l'emplacement (en chiffre) du premier caractère non répéter         //
///////////////////////////////////////////////////////////////////////////////////////////
function firstNonRepeatingCharacter(string) {
    const characters = {};

    for (let i = 0; i < string.length; i++) {
        if (characters[string[i]] === undefined) {
            characters[string[i]] = 1;
        } else {
            characters[string[i]] = characters[string[i]] + 1;
        }
    }
    
    for (let i = 0; i < string.length; i++) {
        if (characters[string[i]] === 1) {
            return i;
        }
    }
    return -1;
}
console.time('toto');
console.log(firstNonRepeatingCharacter("aazzcce"))
console.timeEnd('toto');
    
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;