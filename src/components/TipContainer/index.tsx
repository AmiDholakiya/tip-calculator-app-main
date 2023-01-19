import React from 'react';
import styles from './TipContainer.module.css';

export interface TipContainerProps {
    name: string,
    value: string,
    onChange: any,
}

const TipContainer: React.FC<TipContainerProps> = ({ name, value, onChange }: TipContainerProps) => {

    const tipsList = ["5", "10", "15", "25", "50"];
    return <div className={styles.gridContainer}>
        {
            tipsList.map((tip, index) =>
                <div className={styles.gridItem} key={index}><button onClick={() => { onChange({ name: name, value: tip }); }} className={`${tip === value ? styles.button_active : ''}`}>{tip}% </button></div>
            )
        }
        <div className={styles.gridItem}>
            <input value={!tipsList.includes(value) ? value : ''}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    if (e.currentTarget.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/))
                        onChange({ name: name, value: e.currentTarget.value });
                }}
                placeholder='Custom'
                name={name} />
        </div>
    </div>
}

export default TipContainer;