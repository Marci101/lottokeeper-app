import { useSelector } from 'react-redux';
import ButtonRounded from '../../components/button/ButtonRounded';
import FormYourName from '../../components/form/FormYourName';
import './UserAccountPage.css';

export default function UserAccountPage() {
  const userName = useSelector((state) => state.yourName.userName);

  return (
    <div id="user-account">
      <div id="your-name">
        <p>Your nickname:&nbsp;</p><p id="your-nickname">{userName}</p>
      </div>
      <FormYourName buttonText='Edit' />
      <p>Your balance: 10.000 Akce</p>
      <ul>
        <ButtonRounded buttonText='Back' link='/user' />
      </ul>
    </div>
  );
}
