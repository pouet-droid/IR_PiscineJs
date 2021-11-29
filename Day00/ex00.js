function somme(array, resultat){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (j == i) {
                j++;
            }
            if (array[i] + array[j] == resultat) {
                return [array[i], array[j]];
            }            
        }
    }
    return [];
}