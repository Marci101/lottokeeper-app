export const foundWinningNums = (winningNums, userNumbers) => {

  console.log("RUNS!");

  const winningNumsCopy = [...winningNums];
  winningNumsCopy.sort((a, b) => a - b);

  for (let i = 0; i < userNumbers.length; i++) {

    let userNumsCopy = [...userNumbers[i].userNums];
    userNumsCopy.sort((a, b) => a - b);

    console.log("RUNS INSIDE1!", winningNumsCopy);
    console.log("RUNS INSIDE2!", userNumsCopy);

    //let foundSame = 0;
    for (let j = 0; j < winningNumsCopy.length; j++) {  // "userPage" oldalon szűrd ki, hogy duplikátum legyen egy fogadás 5 számán belül 
                                                        // egy fogadás 5 száma legyen mind egyedi! Nem lehet duplikáció benne!
      if(winningNumsCopy[j] === userNumsCopy[j]) {
        //foundSame++;
        console.log("WINNER");
      }
    }
  }
  //return userNumbersCopy;
}