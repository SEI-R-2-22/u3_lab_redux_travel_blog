import './styles/App.css'
import Posts from './components/Posts'
import Comment from './components/Comment'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </div>
  )
}

export default App
