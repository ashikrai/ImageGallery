import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../utils/store"
import { Chip } from "@mui/material"
import { reset, setDataType } from "../utils/ImageSearchSlice"
import { dataTypes } from "../utils/constant"
import headerImg from "../assets/images/header_small.png"
import "../assets/css/SearchPage.css"

interface searchInterface{
    setSearchText: CallableFunction,
    searchImage: CallableFunction,
    count: number
}

export default function SearchComponent(props:searchInterface) {
    const searchInput= useSelector((state:RootState) => state.search.searchInput)
    const dispatch= useDispatch();
    const dataType= useSelector((state:RootState) => state.search.dataType)

    const KeyPressHandler= (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            props.searchImage(); 
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
                <input 
                    className="searchInput"
                    type="search"
                    placeholder="search your image"
                    value={searchInput} 
                    onKeyDown={(event) => KeyPressHandler(event)}
                    onChange={(event) => props.setSearchText(event.currentTarget.value)} 
                    autoFocus
                />
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
