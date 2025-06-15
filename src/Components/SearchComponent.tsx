import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../utils/store"
import { Autocomplete, Chip, TextField } from "@mui/material"
import { reset, setDataType } from "../utils/ImageSearchSlice"
import { dataTypes } from "../utils/constant"
import headerImg from "../assets/images/header_small.png"
import { styled } from '@mui/material/styles';
import "../assets/css/SearchPage.css"

interface searchInterface{
    setSearchText: CallableFunction,
    searchImage: CallableFunction,
    count: number
}

const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
    width: '50%',
    padding: '1%',
  }));

export default function SearchComponent(props:searchInterface) {
    const searchInput= useSelector((state:RootState) => state.search.searchInput)
    const dispatch= useDispatch();
    const dataType= useSelector((state:RootState) => state.search.dataType)
    const searchHistory= useSelector((state:RootState) => state.search.searchHistory)

    const KeyPressHandler= (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            props.searchImage(); 
            event.currentTarget.blur(); // to remove focus from input
        }
    }
    const homePage= ()=>{
        // console.log("Calling reset")
        dispatch(reset())
    }

    if (props.count == 1)
        return (
            <div className="searchContainer">
                <input 
                    className="searchInput"
                    type="search"
                    placeholder="Search for your image with Behind_Pixl"
                    value={searchInput} 
                    onKeyDown={(event) => KeyPressHandler(event)}
                    onChange={(event) => props.setSearchText(event.currentTarget.value)} 
                    autoFocus
                />
                <p className="pixabay_mention">The image search is powered by <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer" > Pixabay</a>.</p>
            </div>
        )
    return (
        <div>
            <div className="miniSearchContainer">
                <img alt="logo" src={headerImg} className="logo" onClick={homePage}/>
                    <CustomAutocomplete
                        freeSolo
                        options={searchHistory}
                        inputValue={searchInput}
                        onInputChange={(_, newInputValue, reason) => {
                            if(reason === "input"){
                                props.setSearchText(newInputValue)
                            }else if(reason === "reset"){
                                props.setSearchText(newInputValue)
                                props.searchImage(); 
                            }else if (reason === 'clear') {
                                props.setSearchText("")   
                            }
                        }}
                        onKeyDown={(event) => {
                            if(event.key === "Enter"){
                                props.searchImage(); 
                            }
                        }}
                        renderInput={(params) => 
                            <TextField 
                                {...params} 
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                      borderRadius: '40px',
                                      width: '100%',
                                      border: '0.2px solid rgb(227, 220, 220)',
                                    },
                                }}
                                label="Search your image" 
                            />
                        }
                        filterOptions={(options, state) => {
                            // Only show matching options
                            if (!state.inputValue) return [];
                            return options.filter((option) =>
                                (option as string).toLowerCase().includes(state.inputValue.toLowerCase())
                            );
                        }}
                    />
            </div>
            <div>
            </div>
            <div className="baseBorder"></div>
            <div className="ChipContainer">

                {
                    dataTypes.map((data, index) => (
                        <div key={index} className={`datatypes `} >
                            <Chip color={index === dataType ? "success" : "default"} label={data} key={index} onClick={() => {dispatch(setDataType(index))}} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
