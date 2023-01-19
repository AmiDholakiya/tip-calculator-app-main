import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    error?: string,
    icon?: string
}

const Input: React.FC<InputProps> = (props: InputProps) => {
    const { label, name, value, placeholder, error, children, icon, type, ...rest } = props;

    return <div className={`${styles.inputGroup} ${error && styles.error}`}>
        {label && <div className={styles.label}>
            <label>
                {label}
            </label>
            {error && <span>
                {error}
            </span>}
        </div>}
        {!children ? <div className={styles.inputWrapper}>
            {icon && <img alt="icon" src={icon} className={styles.inputIcon} />}
            <input type={type} className={styles.input} placeholder={placeholder} name={name} value={value} {...rest} ></input>
        </div> : children}
    </div>

}

export default Input;