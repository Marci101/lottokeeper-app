import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../common/features/modalSlice";
import FormYourName from '../form/FormYourName';
import ButtonRounded from "../button/ButtonRounded";
import "./modalPopUp.css";

export default function ModalPopUp(props) {
  const { setState, withInputField } = {...props};
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const message = useSelector((state) => state.modal.message);

  const clickHandler = () => {
    dispatch(showModal(false));
    if (setState) {
      setState(false);
    }
  }

  if (!isOpen) {
    return;
  }
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-message">
        <p>{message}</p>
        {withInputField && <FormYourName buttonText='Enter' />}
      </div>
      <ul id="modal-close">
        <ButtonRounded clickHandler={clickHandler} buttonText='Close!' link='#' color="white"/>
      </ul>
    </div>,
    document.getElementById("portal")
  );
}
