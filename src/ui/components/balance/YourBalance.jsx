import { useSelector } from "react-redux";
import "./yourBalance.css";

export default function YourBalance() {
  const yourBalance = useSelector((state) => state.yourBalance.userBalance);

  return (
    <div id="balance">
      <p>Your balance:&nbsp;</p>
      <p className="your-balance">{yourBalance}&nbsp;Akce</p>
    </div>
  );
}
