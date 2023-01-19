import React from "react";
import styles from './AmountReview.module.css';

export interface AmountReviewProps {
    title: string,
    subTitle: string,
    amount: string
}

const AmountReview: React.FC<AmountReviewProps> = (props: AmountReviewProps) => {

    return <div className={styles.container}>
        <div className={styles.titleContainer}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.subTitle}>{props.subTitle}</span>
        </div>
        <div className={styles.amount}>${props.amount}</div>
    </div>

}

export default AmountReview;