import UserName from "../../components/userName/UserName";
import ButtonRounded from "../../components/button/ButtonRounded";
import GenerateNums from "../../components/userGenerate/GenerateNums";
import Modal from "../../components/modal/Modal";
import "./userPage.css";

export default function UserPage() {
  return (
    <div id="user-page">
      <section id="group-buttons">
        <ul>
          <ButtonRounded buttonText="Your Account" link="account" />
          <ButtonRounded buttonText="Your Numbers" link="numbers" />
        </ul>
      </section>
      <section id="guess-nums">
        <p>
          Let&apos;s go,
        </p>
        <UserName />
        <p>Guess the winning numbers!</p>
        <p>Choose from 1 to 39!</p>
        <GenerateNums />
      </section>
      <Modal />
    </div>
  );
}
