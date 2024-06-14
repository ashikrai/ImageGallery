import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { default_SearchKey } from './constant'

export interface SearchKeyState{
    searchKey: string,
    searchInput: string,
    searchImage: boolean,
    searchCount: number,
    searchHistory: string[],
    dataType: number,
    pageNumber: number,
}

const initialState:SearchKeyState= {
    searchKey: default_SearchKey,
    searchInput: "",
    searchImage: false,
    searchCount: 1,
    searchHistory: [default_SearchKey],
    dataType: 0,
    pageNumber: 1,
}

export const imageSearchSlice= createSlice({
    name: 'imageSearch',
    initialState,
    reducers: {
        setSearchInput: (state, action: PayloadAction<string>) => {
            state.searchKey= action.payload.split(' ').join('+')
            state.searchInput = action.payload
        },
        setSearchKey:(state, action:PayloadAction<string>)=>{
            state.searchKey= action.payload
        },
        setSearchImage: (state, action: PayloadAction<boolean>) => {
            state.searchImage= action.payload
            if(action.payload){
                state.searchHistory.push(state.searchInput)
                state.searchCount++
            }
            console.log("setSearchImage ",action.payload)
        },
        reset: (state) => {
            state.searchCount= 1;
            state.searchInput= "";
            state.searchKey= default_SearchKey;
            state.searchImage= false;
            state.searchHistory= [default_SearchKey];
            state.dataType= 0;
            // state.pageNumber= 1
            console.log("reset called: ",state.searchCount,state.searchInput)
        },
        setDataType: (state, action: PayloadAction<number>) => {
            state.dataType= action.payload
        },
        setPageNumber:(state, action: PayloadAction<number>) => {
            state.pageNumber= action.payload;
        },
        addPageNumber:(state) => {
            state.pageNumber++;
        },
        subPageNumber:(state) => {
            state.pageNumber--;
        }
    }
})

export const {setSearchInput, setSearchImage, reset, setDataType,setSearchKey,setPageNumber, addPageNumber, subPageNumber} = imageSearchSlice.actions
export default imageSearchSlice.reducer