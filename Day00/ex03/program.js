///////////////////////////////////////////////////////////////////////////////////////////
//          Retourne l'emplacement (en chiffre) du premier caractère non répéter         //
///////////////////////////////////////////////////////////////////////////////////////////
//Test : console.log(firstNonRepeatingCharacter("aazzcce"))
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
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;