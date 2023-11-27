import { Link } from 'react-router-dom';
import './buttonRounded.css';

export default function ButtonRounded(props) {
  const { buttonText, link, color, clickHandler } = {...props};
  
  return (
    <li onClick={clickHandler ? clickHandler : null} className={`button-rounded ${color ? color : "" }`} >
      <Link to={link}>
        {buttonText}
      </Link>
    </li>
  )
}