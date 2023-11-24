import { useSelector } from "react-redux";

export default function UserName() {
  const userName = useSelector((state) => state.yourName.userName);

  return (
    <p>
      {userName ? userName : "Fortune Hunter"}
    </p>
  )
}
