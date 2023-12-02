export const filterSameArray = (compareThese) => {

  if(compareThese.length > 1) {
    
    for (let i = 0; i < compareThese.length; i++) {
  
      const base = [...compareThese[i]];
      base.sort((a, b) => a - b);
  
      for (let j = i + 1; j < compareThese.length; j++) {
  
        const comperative = [...compareThese[j]];
        comperative.sort((a, b) => a - b);
  
        let allTheSame = 0;
        for (let index = 0; index < base.length; index++) {
  
          if(base[index] === comperative[index]) {
            allTheSame++;
  
            if(allTheSame === base.length) {
              compareThese.splice(j, 1)
            }
          }
        }
      }
    }
  }

  return compareThese;
}
