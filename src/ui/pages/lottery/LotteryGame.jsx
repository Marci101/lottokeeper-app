import ButtonRounded from "../../components/button/ButtonRounded";
import "./lotteryGame.css";

export default function LotteryGame() {
  return (
    <div id="lottery-game">
      <p>Lottery Game Block</p>
      <p>Under Construction! Coming soon!</p>
      <ul className="button-back">
        <ButtonRounded buttonText='Back' link='/admin' />
      </ul>
    </div>
  );
}