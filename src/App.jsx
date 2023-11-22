import { Routes, Route } from 'react-router-dom';
import Layout from './ui/layout/Layout';
import HomePage from './ui/pages/home/HomePage';
import UserPage from './ui/pages/user/UserPage';
import AdminPage from './ui/pages/admin/AdminPage';
import LotteryGame from './ui/components/lottery/LotteryGame';
import NotFoundPage from './ui/pages/notFound/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='user' element={<UserPage />} />
        <Route path='admin' >
          <Route index element={<AdminPage />} />
          <Route path='lottery-draw' element={<LotteryGame />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
