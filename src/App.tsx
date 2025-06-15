
import ImageGallery from './Components/ImageGallery'
import SearchComponent from './Components/SearchComponent'
import { useDispatch, useSelector } from 'react-redux'
import { reset, setSearchImage, setSearchInput } from './utils/ImageSearchSlice'
import { RootState } from './utils/store'
import HeaderComponent from './Components/HeaderComponent'
import { useEffect } from 'react'
import { Alert, Collapse, IconButton } from '@mui/material'
import { CancelRounded, CheckCircleOutline } from '@mui/icons-material'
import { Stack } from '@mui/system'
import { removeAlert } from './utils/utilsSlice'

function App() {
  const dispatch= useDispatch()
  const alertData= useSelector((state:RootState) => state.alert.alertData)

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
      <Stack sx={{ zIndex: 2, width: '20%', position:'absolute', right: '2%', top: '2%' }} spacing={2}>
        <Collapse in={alertData.length > 0}>
          {
            alertData.map((data, index) => (
              <Alert variant="filled" sx={{mt: 1, boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)' }} key={index} icon={<CheckCircleOutline fontSize="inherit" />} severity={data.severity}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      dispatch(removeAlert(index))
                    }}
                  >
                    <CancelRounded fontSize="inherit" />
                  </IconButton>
                }
              >
                {data.message}
              </Alert>
            ))
          }
        </Collapse>
      </Stack>
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
