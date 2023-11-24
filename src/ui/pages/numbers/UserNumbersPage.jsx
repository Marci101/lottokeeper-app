import ButtonRounded from '../../components/button/ButtonRounded';
import './userNumbersPage.css';

export default function UserNumbersPage() {
  return (
    <div id="user-numbers">
      This is the User Numbers Block!
      <ul>
        <ButtonRounded buttonText='Back' link='/user' />
      </ul>
    </div>
  )
}