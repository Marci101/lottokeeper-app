import { useSelector } from 'react-redux';
import ButtonRounded from '../../components/button/ButtonRounded';
import FormYourName from '../../components/form/FormYourName';
import './UserAccountPage.css';

export default function UserAccountPage() {
  const userName = useSelector((state) => state.yourName.userName);

  return (
    <div id="user-account">
      <div id="your-name">
        <p>Your nickname:&nbsp;</p><p id="your-nickname">{userName ? userName : "Fortune Hunter"}</p>
      </div>
      <FormYourName buttonText='Edit' />
      <div className="balance">
        <p>Your balance:&nbsp;</p><p className="your-balance">{`${ "10.000" }`}&nbsp;Akce</p>
      </div>
      <ul>
        <ButtonRounded buttonText='Back' link='/user' />
      </ul>
    </div>
  );
}
