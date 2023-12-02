import { useDispatch } from 'react-redux';
import { resetAllUserNums } from '../../../common/features/userNumbersSlice';
import { resetUserName } from "../../../common/features/userNameSlice";
import { resetBalance } from "../../../common/features/userBalanceSlice";
import ButtonRounded from "../../components/button/ButtonRounded";
import "./adminPage.css";

export default function AdminPage() {
  const dispatch = useDispatch();

  const clickHandlerNewGame = () => {
    dispatch(resetAllUserNums());
  }

  const clickHandlerResetAll = () => {
    dispatch(resetAllUserNums());
    dispatch(resetUserName());
    dispatch(resetBalance());
  }

  return (
    <div id="admin-page">
      <section id="admin-page-hint">
        <p>Admin Page</p>
        <p>Here you can find All the Features to control the game like a Big Boss!</p>
      </section>
      <section className="reset-buttons">
        <ul>
          <ButtonRounded buttonText="Draw Winning Numbers!" link="lottery-draw" />
        </ul>
      </section>
      <section className="reset-buttons">
        <ul onClick={clickHandlerNewGame}>
          <ButtonRounded buttonText="Start New Game!" link="/user" />
        </ul>
      </section>
      <section className="reset-buttons">
        <ul onClick={clickHandlerResetAll}>
          <ButtonRounded buttonText="Full Reset to Default!" link="/" />
        </ul>
      </section>
    </div>
  );
}