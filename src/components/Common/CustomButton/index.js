import styles from './index.module.css';

const CustomButton = props => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.text}>{props.text}</span>
    </button>
  );
};

export default CustomButton;
