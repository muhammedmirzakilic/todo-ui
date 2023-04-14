import styles from './index.module.css';

const CustomInput = props => {
  return (
    <input
      className={styles.input}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default CustomInput;
