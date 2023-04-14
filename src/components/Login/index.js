import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../Common/CustomInput';
import CustomButton from '../Common/CustomButton';
import Header from '../Common/Header';
import { login } from '../../services/authService';
import { useAuth } from '../../hooks';
import styles from './index.module.css';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const response = await login(email, password);
    setAuth(response.data.token);
    navigate('/todo');
  };
  return (
    <div className={styles.container}>
      <Header title="Welcome back!" description="Log in to continue." />
      <CustomInput placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <CustomInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Link to="/signup" className={styles.redirect}>
        <span>Don’t have an account? Sign up.</span>
      </Link>
      <CustomButton text="Login" onClick={onSubmit} />
    </div>
  );
};

export default Login;
