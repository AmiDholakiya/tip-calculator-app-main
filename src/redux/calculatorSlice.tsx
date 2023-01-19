import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const initialState: CalculatorState = {
    billAmount: '',
    tipPer: '',
    totalPeople: '',
    tipAmount: "0.00",
    totalAmount: "0.00"
}
export interface CalculatorState {
    billAmount: string | '',
    tipPer: string | '',
    totalPeople: string | '',
    tipAmount: string | '',
    totalAmount: string | ''
}

export interface UpdatePayload {
    name: string,
    value: string
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<UpdatePayload>) => {
            state[action.payload.name as keyof CalculatorState] = action.payload.value;
        },
        calculateTip: (state) => {
            state.tipAmount = ((parseFloat(state.billAmount) * parseFloat(state.tipPer)) / (100 * parseInt(state.totalPeople))).toFixed(2);
            state.totalAmount = ((parseFloat(state.billAmount) / parseInt(state.totalPeople)) + parseFloat(state.tipAmount)).toFixed(2);
        },
        resetTip: () => initialState
    },
})

export const {
    updateState,
    calculateTip,
    resetTip } = calculatorSlice.actions

export default calculatorSlice.reducer