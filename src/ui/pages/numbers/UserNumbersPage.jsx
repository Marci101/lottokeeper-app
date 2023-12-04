import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ButtonRounded from "../../components/button/ButtonRounded";
import { calculatePrize } from "../../../common/utils/calculatePrize"
import "./userNumbersPage.css";

export default function UserNumbersPage() {
  const [toggleOrder, setToggleOrder ] = useState();

  const [renderUserNumbers, setRenderUserNumbers] = useState([]);
  
  const winningNumbers = useSelector((state) => state.winningNumbers.drawnWinningNums);
  const userNumbers = useSelector((state) => state.yourNumbers.userNumbers);
  let reversedUserNumbers = [...userNumbers].reverse();

  const clickHandler = () => {
    setToggleOrder(!toggleOrder);
  }

  useEffect(() => {
    if(toggleOrder) {
      let desc = [...userNumbers].sort((a, b) => ((b.numOfHits) - (a.numOfHits)));
      setRenderUserNumbers(desc);
    } else {
      let asc = [...userNumbers].sort((a, b) => ((a.numOfHits) - (b.numOfHits)));
      setRenderUserNumbers(asc);
    }
  }, [toggleOrder]);

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
            <div id="order-list">
              <p onClick={clickHandler}>ORDER
                {toggleOrder ? <span>&#8679;</span> : <span>&#8681;</span>}
              </p>
            </div>
          }
        </>
      }
      {reversedUserNumbers.length > 0 &&
        <ul className="data-of-betting">
          {renderUserNumbers.map((num, index) => {
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
                {(num.hitNumbers && num.numOfHits > 0) ?
                <>
                  <p className="numbers-hit">Hits:
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
                  <p className="numbers-hit prize">Prize:&nbsp;
                    <span>
                      {`${calculatePrize(num.numOfHits)}`}
                    </span>
                  </p>
                </>
                :
                  (winningNumbers ?
                    null
                  :
                    <p className="numbers-hit">Hits:&nbsp;nothing, sorry!</p>
                  )
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