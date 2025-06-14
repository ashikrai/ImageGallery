import { imageData, imageDataWrapper } from "../assets/interfaces/interfaces"
import "../assets/css/OpenImage.css"
import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { Avatar, Button, Chip } from "@mui/material";
import { CloseRounded, KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from "@mui/icons-material";

interface openImageInterface{
    image: imageData | null | undefined;
    imageList: imageDataWrapper;
    closeModal: CallableFunction
}


export default function OpenImageComponent(props:openImageInterface) {
    const [activeImage, setActiveImage]= useState<imageData|null |undefined>(props.image);
    const [activeImageIndex, setActiveImageIndex]= useState<number>(-1);
    const [activeImageTag, setActiveImageTag]= useState<string[]>(activeImage?.tags?activeImage?.tags.split(", "):[]);
    const DEFAULT_CHIP_COUNT_MAX= 7
    const [CHIP_COUNT_MAX, setCHIP_COUNT_MAX]= useState<number>(DEFAULT_CHIP_COUNT_MAX)


    const adjustChipCount= () => {
        if(CHIP_COUNT_MAX === DEFAULT_CHIP_COUNT_MAX){
            setCHIP_COUNT_MAX(Number.MAX_SAFE_INTEGER);
        } else {
            setCHIP_COUNT_MAX(DEFAULT_CHIP_COUNT_MAX);
        }
    }

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
          if (event.key === 'Escape') {
            console.log('ESC pressed');
            props.closeModal(false)
          }
        }
    
        window.addEventListener('keydown', handleKeyDown);
        
        // Cleanup on unmount
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    const openImage= (index:number) => {
        if(props.imageList.hits == null)
            return
        if(index < 0)
            index=  props.imageList.hits.length-1
        else if(index >= props.imageList.hits.length)
            index= 0
        setActiveImageIndex(index)
        setActiveImageTag(props.imageList.hits[index].tags.split(", "));
        setActiveImage(props.imageList.hits[index]);
    }

    if(props.image)
        return (
            <div className="container" >
                <div className="leftContainer">
                    <div className="topAction">
                        <div className="userAvatar">
                            <Avatar src={activeImage?.userImageURL}/>
                            <p>{activeImage?.user}</p>
                        </div>
                        <div className="iconsGroup">
                            <KeyboardArrowLeftRounded onClick={()=>openImage(activeImageIndex-1)} className="icons" fontSize="medium" />
                            <KeyboardArrowRightRounded onClick={()=>openImage(activeImageIndex+1)} className="icons" fontSize="medium"/>
                            <CloseRounded className="icons" fontSize="medium" onClick={() => props.closeModal(false)} />
                        </div>
                    </div>
                    <div className="imageInfoContainer">
                        <div className="imgContainer">
                            <img alt="selectedImage" className="activeImage" src={activeImage?.largeImageURL}/>
                        </div>
                        <div className="infoContainer">
                            <div className="ChipContainer"> 
                                {activeImageTag.map((tags:string, index:number)=> (
                                    <Chip className={`${index > CHIP_COUNT_MAX ? "hide": "chips"}`} label={tags} key={index}/>
                                ))}
                                { activeImageTag.length > CHIP_COUNT_MAX ?
                                    <Chip style={{fontWeight: 'bolder'}} onClick={adjustChipCount} className="chips" label={"..."} />
                                 :  <Chip style={{fontWeight: 'bolder'}} onClick={adjustChipCount} className="chips" label={"< show less"} />}
                            </div>
                            <p className="infos_small">The image search is powered by <a rel="noopener" href="https://pixabay.com/" target="_blank">pixabay</a></p>
                            <p className="infos">Image Dimension: {activeImage?.imageHeight} X {activeImage?.imageWidth} (H X W)</p>
                            <p className="infos">Uploaded by: {activeImage?.user}</p>
                            <p className="infos">Downloads: {activeImage?.downloads}</p>
                            <p className="infos">Likes: {activeImage?.likes}</p>
                            <p className="infos">Views: {activeImage?.views}</p>
                            <p className="infos">Comments: {activeImage?.comments}</p>
                            <Button href={activeImage?.pageURL} target="_blank" className="linkBtn" endIcon={<KeyboardArrowRightRounded />}> Visit Page</Button>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="gallery">
                        {
                            props.imageList.hits?.map((data:imageData, index:number) => (
                                (data.id === activeImage?.id) ? 
                                    null
                                :
                                    <ImageCard key={index} onClick={openImage} searching={false} index={index}data={data} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    return null
}
