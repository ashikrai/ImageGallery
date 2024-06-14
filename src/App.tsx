
import ImageGallery from './Components/ImageGallery'
import SearchComponent from './Components/SearchComponent'
import { useDispatch, useSelector } from 'react-redux'
import { reset, setSearchImage, setSearchInput } from './utils/ImageSearchSlice'
import { RootState } from './utils/store'
import HeaderComponent from './Components/HeaderComponent'
import { useEffect } from 'react'

function App() {
  const dispatch= useDispatch()

  const setSearchText= (text:string) =>{
    dispatch(setSearchInput(text))
  }

  const searchImage=()=>{
    dispatch(setSearchImage(true))
  }
  const count= useSelector((state:RootState) => state.search.searchCount)

  useEffect(() => {
    dispatch(reset())
  },[])

  return (
    <div className="galleryHeader">
      <HeaderComponent count={count} />
      <SearchComponent count={count} setSearchText={setSearchText} searchImage={searchImage}/>
      <ImageGallery />
      <div className="footer">
        <p className="text">The search result for the images are powered by Pixabay API calls</p>
        <p className="text">This project is developed by: Behind_Pixl</p>
        <p className="text">ashikthulungrai7@gmail.com</p>
      </div>
    </div>
  )
}

export default App
