import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../common/features/modalSlice";
import FormUserName from '../form/FormYourName';
import "./modal.css";

export default function Modal() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  if (!isOpen) {
    return;
  }
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-message">
        <p>Welcome, Fortune Hunter!</p>
        <p>Please, enter your name first!</p>
        <FormUserName buttonText='Enter' />
      </div>
      <div id="modal-close" onClick={() => dispatch(showModal(false))}>
        Close!
      </div>
    </div>,
    document.getElementById("portal")
  );
}
