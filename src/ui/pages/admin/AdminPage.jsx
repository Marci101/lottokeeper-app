import { Link } from 'react-router-dom';

export default function AdminPage() {
  return (
    <div id='admin-page'>
      This is the Admin Page Block!
      <div>
        <Link to='lottery-draw'>
          Start Lottery Draw!
        </Link>
      </div>
    </div>
  );
}