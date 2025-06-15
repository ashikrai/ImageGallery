import { useEffect, useState } from 'react'
import { getInitialImage } from '../utils/APIHelper';
import { imageData, imageDataWrapper } from '../assets/interfaces/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/store';
import { addPageNumber, setPageNumber, setSearchImage, setSearchKey, subPageNumber } from '../utils/ImageSearchSlice';
import { dataTypes, perPageImage, perPageImageStart } from '../utils/constant';

import "../assets/css/Gallery.css"
import ImageCard from './ImageCard';
import OpenImageComponent from './OpenImageComponent';
import { Button } from '@mui/material';

export default function ImageGallery() {
    const [images, setImages] = useState<imageDataWrapper|null>(null)
    const [searching, setSearching]= useState<boolean>(false)
    const [openImageFlag, setOpenImageFlag]= useState<boolean>(false)
    const [activeImageData, setActiveImageData]= useState<imageData|null>(null)
    const dataType= useSelector((state:RootState) => state.search.dataType);
    
    const pageNumber= useSelector((state:RootState)=> state.search.pageNumber)
    // pageNumber= 1
    const searchImageFlag= useSelector((state:RootState) => state.search.searchImage)
    const searchKey= useSelector((state:RootState) => state.search.searchKey)
    const searchCount= useSelector((state:RootState) => state.search.searchCount)
    const lastSearch= useSelector((state:RootState) => state.search.searchHistory[state.search.searchHistory.length-1])
    const dispatch= useDispatch()

    const API_KEY= import.meta.env.VITE_REACT_APP_PIXABAY_API_KEY as string
    const PIXABAY_URL= `https://pixabay.com/api/?key=${API_KEY}&q=${searchKey}&image_type=${dataTypes[dataType]}&page=${pageNumber}&per_page=${perPageImage}`
    

    // console.log("inside imageGallery",PIXABAY_URL)
    useEffect(()=> {
        // console.log("called once ",searchKey)
        // setSearching(true)
        getImageData();
    },[])

    useEffect(() => {
        if(searchImageFlag){
            setSearching(true)
            getSearchImageData()
        }
    },[searchImageFlag])

    useEffect(() => {
        dispatch(setSearchKey(lastSearch))
        dispatch(setSearchImage(true))
    },[dataType, pageNumber])

    const getSearchImageData= async() => {
        // console.log("Calling the API",PIXABAY_URL);
        try{
            const data= await getInitialImage(PIXABAY_URL);
            setImages(data)
            setSearching(false)
            dispatch(setSearchImage(false))
        }catch (error){
            console.error(error)
            setImages(null)
            setSearching(false)
        }
    }

    const getImageData= async () =>{
        if(!API_KEY){
            console.error("API key is not set")
            return;
        }
        try{
            // console.log("getting image data")
            // const option= getAPIoptions(API_KEY);
            const data= await getInitialImage(PIXABAY_URL);
            if (data === null || data === undefined)
                setImages(null)
            else
                setImages(data)
            // setSearchImage(false)
        }catch (error){
            console.error(error)
            // setSearchImage(false)
            setImages(null)
        }
    }
    const openImage= (index:number) => {
        // console.log("open image",index)
        setOpenImageFlag(true);
        setActiveImageData(images?.hits? images?.hits[index] : null);
    }
    if (images === null)
        return(
        <div className="galleryContainer">
            {lastSearch}: searching
        </div>
        )
    return (
        <div className="galleryContainer">
            <div className={searchCount === 1 ? "hide" : "show"}>
                {searching ?
                    <div>
                        {lastSearch}: searching
                    </div>
                :
                    <div>
                        Search result for: {lastSearch} ({images?.totalHits}) results 
                    </div>
                }
            </div>
            <div>
                {images.total === 0 ?
                    <div>
                        There are no images found for search input: {lastSearch}
                    </div>
                :
                    <div>
                        <div className="gallery">
                            {
                                images.hits?(
                                    searchCount === 1 ?
                                        images.hits.slice(0,perPageImageStart).map((data:imageData, index:number) =>(
                                            <ImageCard key={index} onClick={openImage} searching={searching} index={index} data={data} />
                                        ))
                                        :
                                        images.hits.map((data:imageData, index:number) =>(
                                            <ImageCard key={index} onClick={openImage} searching={searching} index={index} data={data} />
                                        ))
                                )
                                :(null)
                            }
                        </div>
                        <div className={`pagination ${searchCount === 1 ? "hide" : ""}`}>
                            { pageNumber > 1
                                ?
                                    <>
                                        <Button className="pageBtn" onClick={() => dispatch(setPageNumber(1))}>Start</Button>
                                        <Button className="pageBtn" onClick={() => dispatch(subPageNumber())}>Prev Page </Button>
                                    </>
                                : null
                            }
                            {/* <Button className={`pageBtnActive ${ (pageNumber === 1 || pageNumber === Math.ceil(images.totalHits/perPageImage)) ? "hide": "show"}`} disabled={true} >{pageNumber}</Button> */}
                            {pageNumber < Math.ceil(images.totalHits/perPageImage) ?
                                <>
                                    <Button className="pageBtn" onClick={() => dispatch(addPageNumber())} >Next Page </Button>
                                    <Button className="pageBtn" onClick={() => dispatch(setPageNumber(Math.ceil(images.totalHits/perPageImage)))}>End (Page: {Math.ceil(images.totalHits/perPageImage)})</Button>
                                </>
                                : null
                            }
                        </div>
                    </div>
                }
            </div>
            {
                openImageFlag
                ?
                <div className="classModal">
                    <OpenImageComponent image={activeImageData} imageList={images} closeModal={setOpenImageFlag} />
                </div>
                : null
            }
        </div>
    )
}
