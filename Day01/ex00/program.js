///////////////////////////////////////////////////////////////////////////////////////////
//  Retourne un tableau de chiffre multiplié par eux même et ranger par ordre croissant  //
///////////////////////////////////////////////////////////////////////////////////////////
//Test : console.log(tabTriCarre([1, 2 , 4, 5, 9]))
function tabTriCarre(array){
    multi = [];
    array.forEach(element =>{
        multi.push(element*element)
    })
    multi.sort((a,b) =>a-b)
    return multi
}
    
exports.tabTriCarre =  tabTriCarre;