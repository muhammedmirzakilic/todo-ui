import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import CustomInput from '../Common/CustomInput';
import CustomButton from '../Common/CustomButton';
import Header from '../Common/Header';
import { signUp } from '../../services/authService';
import { useAuth } from '../../hooks';

const SignUp = () => {
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
      <Header title="Welcome!" description="Sign up to start using Simpledo today." />
      <CustomInput placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
      <CustomInput placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <CustomInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Link to="/login" className={styles.redirect}>
        <span>Do have an account? Sign in.</span>
      </Link>
      <CustomButton text="Sign Up" onClick={onSubmit} />
    </div>
  );
};

export default SignUp;
