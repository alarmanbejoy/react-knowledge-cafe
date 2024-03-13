

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] =useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
   const newBookmarks= [...bookmarks,blog]
   setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = tiem =>{
 const neWReadngTiem =  readingTime+ tiem;
 setReadingTime (neWReadngTiem)
  }
  

return (
    <>

     <Header></Header>
     <main className='md:flex ml-8 mr-8 max-w-7xl'>
     <Blogs   handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}> </Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     
     </main>
   
    </>
  )
}

export default App
