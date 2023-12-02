import ButtonRounded from "../../components/button/ButtonRounded";
import { createUniqueNumsArray } from "../../../common/utils/createUniqueNumsArray";
//import { filterSameArray } from '../../../common/utils/filterSameArray';
import "./lotteryGame.css";

export default function LotteryGame() {

  const itemOfDrawnNumbers = 1;
  const matrix = createUniqueNumsArray(itemOfDrawnNumbers);
  console.log(matrix);


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