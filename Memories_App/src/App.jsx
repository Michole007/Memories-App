import Header from "./Components/Header"
import Post from "./Components/Post"
import Addpost from "./Components/Addpost"




const App = () => {
  return (
    <div className="Home" >
      <div className="container">
          <Header />
        <div style={{ display: 'flex', columnGap: '20px', marginTop: '20px' }}>
          <Post />
          <Addpost />
        </div>
      </div>
      
    </div>
  )
}

export default App