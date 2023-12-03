import ButtonRounded from "../../components/button/ButtonRounded";
import AutoGenerateNums from "../../components/adminGenerate/autoGenerateNums";
import "./lotteryGame.css";

export default function LotteryGame() {
  
  return (
    <div id="lottery-game">
      <p>Start draw the Winning Numbers!</p>
      <AutoGenerateNums />
      <section>
        <ul className="button-back">
          <ButtonRounded buttonText='Back' link='/admin' />
        </ul>
      </section>
    </div>
  );
}