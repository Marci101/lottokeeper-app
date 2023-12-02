export const createUniqueNumsArray = (repeat) => {
  let matrixOfArrays = new Array();
  do {
    let randomNumsArray = new Array();
    let uniqueNumsArray = new Set();
    do {
      randomNumsArray.push(Math.floor(Math.random() * 39) + 1);
      uniqueNumsArray = new Set(randomNumsArray);
    } while(uniqueNumsArray.size !== 5);

    matrixOfArrays.push(uniqueNumsArray);

  } while(matrixOfArrays.length !== repeat)

  return matrixOfArrays;
}
