import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../common/features/modalSlice";
import ButtonRounded from "../../components/button/ButtonRounded";
import GenerateNums from "../../components/userGenerate/GenerateNums";
import ModalPopUp from "../../components/modal/ModalPopUp";
import "./userPage.css";

export default function UserPage() {
  const userName = useSelector((state) => state.yourName.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showModal({isOpen: true, message: "Welcome, Fortune Hunter!\nPlease, enter your name first!"}));
  }, []);

  return (
    <div id="user-page">
      <section id="group-buttons">
        <ul>
          <ButtonRounded buttonText="Your Account" link="account" />
          <ButtonRounded buttonText="Your Numbers" link="numbers" />
        </ul>
      </section>
      <section id="guess-nums">
        <p>Let&apos;s go, {userName ? userName : "Fortune Hunter"}</p>
        <p>Guess the winning numbers!</p>
        <p>Choose from 1 to 39!</p>
        <GenerateNums />
      </section>
      {!userName && <ModalPopUp withInput={true} />}
    </div>
  );
}
