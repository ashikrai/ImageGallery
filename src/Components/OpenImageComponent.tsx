import { imageData, imageDataWrapper } from "../assets/interfaces/interfaces"
import "../assets/css/OpenImage.css"
import { useState } from "react";
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
    if(props.image)
        return (
            <div className="container">
                <div className="leftContainer">
                    <div className="topAction">
                        <div className="userAvatar">
                            <Avatar src={activeImage?.userImageURL}/>
                            <p>{activeImage?.user}</p>
                        </div>
                        <div className="iconsGroup">
                            <KeyboardArrowLeftRounded className="icons" fontSize="medium" />
                            <KeyboardArrowRightRounded className="icons" fontSize="medium"/>
                            <CloseRounded className="icons" fontSize="medium" onClick={() => props.closeModal(false)} />
                        </div>
                    </div>
                    <div className="imageInfoContainer">
                        <div className="imgContainer">
                            <img alt="selectedImage" className="activeImage" src={activeImage?.largeImageURL}/>
                        </div>
                        <div className="infoContainer">
                            <div className="ChipContainer"> 
                                {activeImage?.tags.split(", ").map((tags:string, index:number)=> (
                                    <Chip className="chips" label={tags} key={index}/>
                                ))}
                            </div>
                            <p className="infos_small">The image search is powered by <a href="https://pixabay.com/" target="_blank">pixabay</a></p>
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
                            props.imageList.hits?.map((data:imageData) => (
                                (data.id === activeImage?.id) ? 
                                    null
                                :
                                    <ImageCard onClick={setActiveImage} searching={false} data={data} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    return null
}
