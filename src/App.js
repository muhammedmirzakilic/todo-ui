import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Todo from './components/Todo';
import { useAuth } from './hooks';
function App() {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route path="signup" element={auth ? <Navigate to="/todo" /> : <SignUp />} />
      <Route path="login" element={auth ? <Navigate to="/todo" /> : <Login />} />
      <Route path="todo" element={auth ? <Todo /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
