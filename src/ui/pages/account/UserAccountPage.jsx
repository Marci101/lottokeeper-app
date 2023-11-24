import ButtonRounded from '../../components/button/ButtonRounded';
import FormYourName from '../../components/form/FormYourName';
import './UserAccountPage.css';

export default function UserAccountPage() {
  return (
    <div id="user-account">
      <p>Your nickname:</p>
      <FormYourName buttonText='Edit' />
      <p>Your balance: 10.000 Akce</p>
      <ul>
        <ButtonRounded buttonText='Back' link='/user' />
      </ul>
    </div>
  );
}
