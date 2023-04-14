import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Todo from './components/Todo';
function App() {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
