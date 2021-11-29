///////////////////////////////////////////////////////////////////////////////////////////
//                                         Rush                                          //
///////////////////////////////////////////////////////////////////////////////////////////
//Test : console.log(levDist(str1, str2));
function sun(buildings, direction) {
    exports.sun = sun ;
      let tallest = 0;
      let sunnyList = [];
      if (direction == "Est") {
        buildings.reverse();
      }
      for (let i = 0; i < buildings.length; i++) {
        if (tallest < buildings[i]) {
          tallest = buildings[i];
          if (direction == "Est") {
            sunnyList.push(buildings.length - i - 1);
          } else {
            sunnyList.push(i);
          }
        }
      }
    
      if (direction == "Est") {
        return sunnyList.reverse();
      }
      return sunnyList
    }
    