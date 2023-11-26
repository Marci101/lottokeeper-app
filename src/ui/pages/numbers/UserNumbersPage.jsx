import { useSelector } from 'react-redux';
import ButtonRounded from '../../components/button/ButtonRounded';
import './userNumbersPage.css';

export default function UserNumbersPage() {
  const userNumbers = useSelector((state) => state.yourNumbers.userNumbers);
  const reversedUserNumbers = [...userNumbers].reverse();

  return (
    <div id="user-numbers">
      {reversedUserNumbers.length === 0 ?
        <p className="page-hint">If you play with us, than you can see your lucky numbers here!</p>
      :
        <p className="page-hint">The list of your lucky numbers</p>
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