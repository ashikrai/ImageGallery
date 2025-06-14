import { imageData } from "../assets/interfaces/interfaces"
import likeIcon from "../assets/images/like.png"

interface imageCardData{
    searching: boolean,
    data: imageData,
    index: number,
    onClick: CallableFunction
}

function filterTags(tagData:string){
  const TAG_LENGTH= 49
  if (tagData == "")
    return ""
  let tags=""
  for (let tag of tagData.split(",")){
      if(tags.length >= TAG_LENGTH)
          break
      tags+= tag+","
  }
  tags+="..."
  return tags
}

export default function ImageCard(props:imageCardData) {
  const tags= filterTags(props.data.tags)
  return (
    <div className="imgContainer">
      <img alt={props.data.tags} onClick={()=> props.onClick(props.index)} key={props.data.id} className={`imgs ${props.searching ? 'inactive' : ''}`} src={props.data.previewURL} />
      <div className="imgDataContainer">
        <a href={props.data.userImageURL} className="userLink" target="_blank" rel="noopener noreferrer" >{props.data.user}</a>
        <div className="LikeCount">
            <img alt="likeicon" src={likeIcon} className="likeIcon" />
            <p>{props.data.likes}</p>
        </div>
        <div className="imageDataOverlay">
          <p className="imageDimension">{props.data.imageWidth} X {props.data.previewHeight}</p>
          <p className="imageTags">{tags}</p>
        </div>
      </div>
    </div>
  )
}
