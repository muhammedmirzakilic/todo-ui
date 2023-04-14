import styles from './index.module.css';
import logo from '../../../assests/group.svg';

const Header = props => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <span className={styles.title}>{props.title}</span>
      {props.description && <span className={styles.description}>{props.description}</span>}
    </div>
  );
};

export default Header;
