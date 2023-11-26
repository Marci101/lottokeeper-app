import { useSelector } from 'react-redux';
import ButtonRounded from '../../components/button/ButtonRounded';
import './userNumbersPage.css';

export default function UserNumbersPage() {
  const userNumbers = useSelector((state) => state.yourNumbers.userNumbers);

  return (
    <div id="user-numbers">
      <ul>
        {[...userNumbers].map((num, index) => {
          console.log("NUMMM:",num);
          return (
            <li key={`${index}${num}}`} data={`${index}${num}}`}>{num}</li>
          )
        })}
      </ul>
      <ul>
        <ButtonRounded buttonText='Back' link='/user' />
      </ul>
    </div>
  )
}