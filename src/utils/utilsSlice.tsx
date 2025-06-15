import { AlertColor } from '@mui/material'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export interface alertDataType{
    message: string,
    severity: AlertColor,
}
export interface utilsSate{
    alertData: alertDataType[],
}

const initialState:utilsSate= {
    alertData: [],
}

export const utilsSlice= createSlice({
    name: 'utils',
    initialState,
    reducers: {
        addAlertMessage: (state, action: PayloadAction<alertDataType>) => {
            const alertData= {
                message: action.payload.message,
                severity: action.payload.severity
            }
            state.alertData.push(alertData)
        },
        removeAlert:(state, action:PayloadAction<number>)=>{
            state.alertData.splice(action.payload,1)
        },
    }
})

export const {addAlertMessage, removeAlert} = utilsSlice.actions
export default utilsSlice.reducer