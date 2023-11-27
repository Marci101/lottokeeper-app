import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yourUserNums } from '../../../common/features/userNumbersSlice';
import { showModal } from "../../../common/features/modalSlice";
import { decreaseBalance } from "../../../common/features/userBalanceSlice";
import ModalPopUp from '../modal/ModalPopUp';
import { getCurrentDate } from '../../../common/utils/currentDate';
import "./generateNums.css";

export default function GenerateNums() {
  const [userNums, setUserNums] = useState({});
  const [error, setError] = useState(false);
  const yourBalance = useSelector((state) => state.yourBalance.userBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    if (yourBalance < 500) {
      dispatch(showModal({isOpen: error, message: "Sorry!\nYour balance is too low!\nYou can not place a new bet!"}));
    } else {
      dispatch(showModal({isOpen: error, message: "Something went wrong!\nPlease, enter 5 numbers! Choose from 1 to 39!"}));
    }
  }, [error]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserNums({...userNums, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let fiveGoodNumInput = 0;
    const numbers = Object.values(userNums);
    numbers.forEach((num) => {
      if(isNaN(parseInt(num)) || numbers.length !== 5 || num < 1 || num > 39) {
        setError(true);
      } else {
        fiveGoodNumInput++;
      }
    })
    if (fiveGoodNumInput === 5) {
      setUserNums(userNums);
      dispatch(yourUserNums({userNums: Object.values(userNums), date: getCurrentDate()}));
      if (yourBalance >= 500) {
        dispatch(decreaseBalance());
      } else {
        setError(true);
      }
    }
  }

  return (
    <section id="generate-nums">
      <form onSubmit={handleSubmit}>
        {[...Array(5)].map((item, index) => (
          <input
            key={index}
            type="number"
            name={`bet${index + 1}`}
            value={(userNums[userNums.bet + `${index + 1}`])}
            onChange={handleChange}
            min="1"
            max="39"
            maxLength="2"
            required
            autoComplete="off" />
        ))}
        <button type="submit">Bet!</button>
      </form>
      {error && <ModalPopUp setState={setError} />}
    </section>
  );
}