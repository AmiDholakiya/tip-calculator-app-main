import React from 'react';
import styles from './CalculatorCard.module.css';
import InputGroup from '../InputGroup';
import Input from '../Input';
import AmountReview from '../AmountReview';
import DollarIcon from '../../assets/icon-dollar.svg';
import PersonIcon from '../../assets/icon-person.svg';

const CalculatorCard = () => {
    return <div className={styles.cardContainer}>
        <div className={styles.cardBody}>
            <div className={styles.container}>
                <InputGroup label="Bill">
                    <Input name="bill" placeholder="0" type="text" icon={DollarIcon} />
                </InputGroup>
                <InputGroup label="Select Tip %">
                    <div className={styles.gridContainer}>
                        <div className={styles.gridItem}><button value="5%" >5% </button></div>
                        <div className={styles.gridItem}><button value="10%" >10% </button></div>
                        <div className={styles.gridItem}><button value="15%" >15% </button></div>
                        <div className={styles.gridItem}><button value="25%" >25% </button></div>
                        <div className={styles.gridItem}><button value="50%" >50% </button></div>
                        <div className={styles.gridItem}>
                            <input placeholder='Custom' name="c_tip" />
                        </div>
                    </div>
                </InputGroup>
                <InputGroup label="Number of People">
                    <Input name="people" placeholder="0" type="text" icon={PersonIcon} />
                </InputGroup>
            </div>
            <div className={`${styles.container} ${styles.resultContainer}`}>
                <div>
                    <AmountReview title="Tip Amount" subTitle="/ person" amount="0.00" />
                    <AmountReview title="Total" subTitle="/ person" amount="0.00" />
                </div>
                <button className={styles.reset}> Reset </button>
            </div>
        </div>
    </div>
}

export default CalculatorCard;