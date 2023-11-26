import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { yourUserNums } from '../../../common/features/userNumbersSlice';
import { showModal } from "../../../common/features/modalSlice";
import ModalPopUp from '../modal/ModalPopUp';
import { getCurrentDate } from '../../../common/utils/currentDate';

export default function GenerateNums() {
  const [userNums, setUserNums] = useState({});
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showModal({isOpen: error, message: "Something went wrong!\nPlease, enter 5 numbers! Choose from 1 to 39!"}));
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
    }
  }

  return (
    <section id="generate-nums">
      <form onSubmit={handleSubmit}>
        <input type="number" name="bet1" value={userNums.bet1 || ""} onChange={handleChange} min="1" max="39" required></input>
        <input type="number" name="bet2" value={userNums.bet2 || ""} onChange={handleChange} min="1" max="39" required></input>
        <input type="number" name="bet3" value={userNums.bet3 || ""} onChange={handleChange} min="1" max="39" required></input>
        <input type="number" name="bet4" value={userNums.bet4 || ""} onChange={handleChange} min="1" max="39" required></input>
        <input type="number" name="bet5" value={userNums.bet5 || ""} onChange={handleChange} min="1" max="39" required></input>
        <button type="submit">My bet!</button>
      </form>
      {error && <ModalPopUp setState={setError} />}
    </section>
  );
}