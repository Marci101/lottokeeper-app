import { Link } from "react-router-dom";
import "./adminPage.css";

export default function AdminPage() {
  return (
    <div id="admin-page">
      <p>Under construction!</p>
      <p>This is the Admin Page Block!</p>
      <div>
        <Link to="lottery-draw">
          Start Lottery Draw!
        </Link>
      </div>
    </div>
  );
}