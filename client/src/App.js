import './styles/App.css'
import Comment from './components/Comment'
import Post from './components/Posts'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </div>
  )
}

export default App
