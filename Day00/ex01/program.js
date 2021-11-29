///////////////////////////////////////////////////////////////////////////////////////////
//                Retourne true si la chaine de caractère est palindrome                 //
///////////////////////////////////////////////////////////////////////////////////////////
function isPalindrome(string){
    for (let i = 0 ; i < string.length ; i++) {
        if(string[i] !== string[string.length - 1 - i]) 
            return false;
    }
    return true;
}
 
exports.isPalindrome =  isPalindrome;