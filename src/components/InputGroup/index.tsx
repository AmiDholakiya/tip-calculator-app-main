import React from 'react'
import styles from './InputGroup.module.css';

const InputGroup = (prop:any) => {

    return <div className={styles.inputGroup}>
                <div className={styles.label}>
                    <label>
                        {prop.label}
                    </label>
                    <span className={styles.error}>
                        {prop.error}
                    </span>
                </div>
                {prop.children}
    </div>
}

export default InputGroup;