import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../common/features/modalSlice";
import { enterUserName } from "../../../common/features/userNameSlice";

export default function FormYourName(props) {
  const { buttonText } = {...props};
  const [ userName, setUserName ] = useState("");
  const userNameStored = useSelector((state) => state.yourName.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserName(userNameStored);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(enterUserName(userName));
    dispatch(showModal(false));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder={buttonText === "Enter" ? "Your nickname..." : "Edit your name..."}
        autoFocus
        name="yourName"
        autoComplete="off"
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
}
