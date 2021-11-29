///////////////////////////////////////////////////////////////////////////////////////////
//       Retourne le nombre d'actions necessaire pour transformer la chaine 1 en 2       //
///////////////////////////////////////////////////////////////////////////////////////////
//Test : console.log(levDist(str1, str2));
function levDist(str1, str2){
    let diffCount1=0;
    let diffCount2=0;

    for (let i=0;i <= str1.length; i++) {
        let character = str1.charAt(i);
        for (let j=0; j <= str2.length; j++) {
            if (str2.indexOf(character) === -1) {
                diffCount1++;
                break;
            }
        }
    }

    for (let i=0;i <= str2.length; i++) {
        let character = str2.charAt(i);
        for (let j=0; j <= str1.length; j++) {
            if (str1.indexOf(character) === -1) {
                diffCount2++;
                break;
            }
        }
    }
    return Math.max(diffCount1, diffCount2);
  }
str1 = "la fin des haricots"
str2 = 'la fin du pain'
exports.levDist =  levDist;