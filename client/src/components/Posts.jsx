import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadPosts } from '../store/actions/LocationActions'

const mapStateToProps = ({ postsState }) => {
  console.log(postsState)
  return { postsState}
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch is working')
  return {
    fetchPostList: () => dispatch(LoadPosts())
  }
}

const Posts = (props) => {
  useEffect(() => {
    console.log('useEffect')
    props.fetchPostList()
  }, [])

  const posts = props.postsState.posts.map((post) => (
    <li key={post._id}>
      <Link to={`/posts/${post._id}`}>{post.name}</Link>
    </li>
  ))

  return (
    <div>
      {posts}
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts)
