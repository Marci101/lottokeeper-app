import { useSelector } from "react-redux";
import ButtonRounded from "../../components/button/ButtonRounded";
import { calculatePrize } from "../../../common/utils/calculatePrize"
import "./userNumbersPage.css";

export default function UserNumbersPage() {
  const winningNumbers = useSelector((state) => state.winningNumbers.drawnWinningNums);
  const userNumbers = useSelector((state) => state.yourNumbers.userNumbers);
  const reversedUserNumbers = [...userNumbers].reverse(); console.log("reversedUserNumbers:::", reversedUserNumbers);
  const descUserNumbers = [...userNumbers].sort((a, b) => ((b.hitNumbers.length) - (a.hitNumbers.length))); console.log("descUserNumbers",descUserNumbers);
  const ascUserNumbers = [...userNumbers].sort((a, b) => ((a.hitNumbers.length) - (b.hitNumbers.length))); console.log("ascUserNumbers",ascUserNumbers);

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
          {(typeof winningNumbers[0] === "number") &&
            <div id="order-list">ORDER</div>
          }
        </>
      }
      {reversedUserNumbers.length > 0 &&
        <ul className="data-of-betting">
          {reversedUserNumbers.map((num, index) => {
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
                {(num.hitNumbers && num.hitNumbers.length > 0) &&
                  <>
                  <p className="numbers-hit">Numbers hit:
                    {
                      num.hitNumbers.map((hit, index) => {
                        return (
                          <span key={index}>
                            {hit}
                          </span>
                        );
                      })
                    }
                  </p>
                  <p className="numbers-hit prize">Prize:&nbsp;<span>{`${calculatePrize(num.hitNumbers.length)}`}</span></p>
                  </>
                }
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