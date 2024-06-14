import headerImg  from "../assets/images/header_small.png"
import "../assets/css/MainPage.css"

interface HeaderInterface{
    count: number
}


export default function HeaderComponent(props:HeaderInterface) {

    if (props.count === 1)
    return (
        <div>
            <div className="logocontianer">
                <img alt="logo" src={headerImg} className="logo"/>
            </div>
        </div>
    )

    return <></>
}
