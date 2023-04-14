import { useState } from 'react';
import styles from './index.module.css';
import logo from '../../assests/group.svg';
import CustomInput from '../Common/CustomInput';
import CustomButton from '../Common/CustomButton';
import { signUp } from '../../services/authService';
import { useAuth } from '../../hooks';
const SignUp = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();

  const onSubmit = async () => {
    const response = await signUp(name, email, password);
    setAuth(response.data.token);
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <span className={styles.welcome}>Welcome!</span>
      <span className={styles.description}>Sign up to start using Simpledo today.</span>
      <CustomInput placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
      <CustomInput placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <CustomInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <span className={styles.redirect}>Do have an account? Sign in.</span>
      <CustomButton text="Sign Up" onClick={onSubmit} />
    </div>
  );
};

export default SignUp;
