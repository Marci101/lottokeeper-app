import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../common/features/modalSlice";
import FormYourName from '../form/FormYourName';
import "./modalPopUp.css";

export default function ModalPopUp(props) {
  const { setState, withInput } = {...props};
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
        {withInput && <FormYourName buttonText='Enter' />}
      </div>
      <div id="modal-close" onClick={clickHandler}>
        Close!
      </div>
    </div>,
    document.getElementById("portal")
  );
}
