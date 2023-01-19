import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CalculatorCard.module.css';

import { RootState } from '../../redux/store';
import { updateState, resetTip, calculateTip, UpdatePayload } from '../../redux/calculatorSlice';

import { Input, TipContainer } from '../index';
import AmountReview from '../AmountReview';

import DollarIcon from '../../assets/icon-dollar.svg';
import PersonIcon from '../../assets/icon-person.svg';

const CalculatorCard: React.FC = () => {
    const calculator = useSelector((state: RootState) => state.calculator);
    const dispatch = useDispatch();

    const updateData = (payload: UpdatePayload) => {
        dispatch(updateState(payload));
    }

    useEffect(() => {
        if (dispatch && calculator) {

            if (calculator.billAmount && calculator.tipPer && calculator.totalPeople)
                dispatch(calculateTip())
            else {
                dispatch(updateState({ name: "tipAmount", value: "0.00" }));
                dispatch(updateState({ name: "totalAmount", value: "0.00" }));

            }
        }
    }, [dispatch, calculator]);

    return <div className={styles.cardContainer}>
        <div className={styles.cardBody}>
            <div className={styles.container}>
                <Input label="Bill"
                    id="t_bill"
                    value={calculator.billAmount}
                    name="billAmount"
                    placeholder="0"
                    type="text"
                    icon={DollarIcon}
                    onChange={
                        (e: React.FormEvent<HTMLInputElement>) => {
                            if (e.currentTarget.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/))
                                updateData({ name: e.currentTarget.name, value: e.currentTarget.value })
                        }}
                />
                <Input label="Select Tip %">
                    <TipContainer
                        name="tipPer"
                        value={calculator.tipPer}
                        onChange={
                            (data: UpdatePayload) => {
                                updateData(data)
                            }}
                    />
                </Input>
                <Input label="Number of People"
                    id="t_people"
                    value={calculator.totalPeople}
                    name="totalPeople"
                    placeholder="0"
                    type="text"
                    icon={PersonIcon}
                    onChange={
                        (e: React.FormEvent<HTMLInputElement>) => {
                            if (e.currentTarget.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/))
                                updateData({ name: e.currentTarget.name, value: e.currentTarget.value })
                        }}
                />
            </div>
            <div className={`${styles.container} ${styles.resultContainer}`}>
                <div>
                    <AmountReview title="Tip Amount" subTitle="/ person" amount={calculator.tipAmount} />
                    <AmountReview title="Total" subTitle="/ person" amount={calculator.totalAmount} />
                </div>
                <button className={styles.reset} disabled={!calculator.billAmount || !calculator.tipPer || !calculator.totalPeople} onClick={() => { dispatch(resetTip()) }}> Reset </button>
            </div>
        </div>
    </div>
}

export default CalculatorCard;