import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/group.svg';
import CustomInput from '../Common/CustomInput';
import CustomButton from '../Common/CustomButton';
import { login } from '../../services/authService';
import { useAuth } from '../../hooks';
import styles from './index.module.css';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();

  const onSubmit = async () => {
    const response = await login(email, password);
    setAuth(response.data.token);
  };
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <span className={styles.welcome}>Welcome back!</span>
      <span className={styles.description}>Log in to continue.</span>
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
