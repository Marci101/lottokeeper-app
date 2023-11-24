import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { showModal } from "../../../common/features/modalSlice";
import './buttonRounded.css';

export default function ButtonRounded(props) {
  const { buttonText, link, color } = {...props};
  const userName = useSelector((state) => state.yourName.userName);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (!userName && link === 'user') {
      dispatch(showModal(true));
    }
  }
  
  return (
    <li className={`button-rounded ${color ? color : "" }`} onClick={clickHandler}>
      <Link to={link}>
        {buttonText}
      </Link>
    </li>
  )
}