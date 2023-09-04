import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Users } from './pages/Users';
import { Posts } from './pages/Posts';
import { Comments } from './pages/Comments';
import { Albums } from './pages/Albums';
import { Photos } from './pages/Photos';
import { Todos } from './pages/Todos';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Usuarios" element={<Users/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}
