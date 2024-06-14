import { imageData } from "../assets/interfaces/interfaces"
import likeIcon from "../assets/images/like.png"

interface imageCardData{
    searching: boolean,
    data: imageData,
    onClick: CallableFunction
}

export default function ImageCard(props:imageCardData) {
  return (
    <div className="imgContainer">
      <img onClick={()=> props.onClick(props.data)} key={props.data.id} className={`imgs ${props.searching ? 'inactive' : ''}`} src={props.data.previewURL} />
      <div className="imgDataContainer">
        <a href={props.data.userImageURL} className="userLink" target="_blank" rel="noopener noreferrer" >{props.data.user}</a>
        <div className="LikeCount">
            <img alt="likeicon" src={likeIcon} className="likeIcon" />
            <p>{props.data.likes}</p>
        </div>
        <div className="imageDataOverlay">
          <p className="imageDimension">{props.data.imageWidth} X {props.data.previewHeight}</p>
          <p className="imageTags">{props.data.tags}</p>
        </div>
      </div>
    </div>
  )
}
