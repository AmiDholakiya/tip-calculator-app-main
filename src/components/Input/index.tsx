import Reatc from 'react';
import styles from './Input.module.css'; 

const Input = (props:any) => {

    return <div className={`${styles.inputWrapper} ${props.isError && styles.error}`}>
                {props.icon && <img src={props.icon} className={styles.inputIcon} />}
                <input className={styles.input} placeholder={props.placeholder} name={props.name} type={props.type}></input>
            </div>

}

export default Input;