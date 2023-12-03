import { useSelector } from 'react-redux';
import ButtonRounded from '../../components/button/ButtonRounded';
import { foundWinningNums } from "../../../common/utils/foundWinningNums";
import './userNumbersPage.css';

export default function UserNumbersPage() {
  const winningNumbers = useSelector((state) => state.winningNumbers.drawnWinningNums);
  const userNumbers = useSelector((state) => state.yourNumbers.userNumbers);
  const reversedUserNumbers = [...userNumbers].reverse();


  if((typeof winningNumbers[0] === "number") && userNumbers.length > 0) {

    foundWinningNums(winningNumbers, userNumbers);
  }


  return (
    <div id="user-numbers">
      {reversedUserNumbers.length === 0 ?
        <p className="page-hint">If you play with us, than you can see your Lucky Numbers here with current the Winning Numbers!</p>
      :
        <>
          {(typeof winningNumbers[0] === "number") &&
            <div className="winning-nums">
              <p className="nums-title">Latest drawn Winning Numbers:&nbsp;</p>
              <p className="nums-row">
                {
                  winningNumbers.map((winningNum, index) => {
                    return (
                      <span key={index}>
                        {winningNum}
                      </span>
                    );
                  })
                }
              </p>
            </div>
          }
          <p className="page-hint with-nums">The list of your Lucky Numbers</p>
        </>
      }
      {reversedUserNumbers.length > 0 &&
        <ul className="data-of-betting">
          {[...reversedUserNumbers].map((num, index) => {
            return (
              <li key={index}>
                <div className="timedata">
                  <p className="time-of-bet">Time of bet:</p><p className="timestamp">{num.date}</p>
                </div>
                <p className="numbers">
                  {
                    num.userNums.map((numItem, index) => {
                      return (
                        <span key={index}>
                          {numItem}
                        </span>
                      );
                    })
                  }
                </p>
              </li>
            );
          })}
        </ul>
      }
      <ul className="button-back">
        <ButtonRounded buttonText='Back' link='/user' />
      </ul>
    </div>
  )
}