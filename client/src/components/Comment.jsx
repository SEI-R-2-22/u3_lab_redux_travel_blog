import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadComments } from '../store/actions/LocationActions'

const mapStateToProps = ({ commentsState}) => {
    return { commentsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchCommentList: () => dispatch(LoadComments())
    }
}

const Comment = (props) => {

    useEffect(() => {
        props.fetchCommentList()
    }, [])

    const Comment = props.commentsState.comments.map((comment) => (
        <li key={comment._id}>
            <Link to={`/Comment/${comment._id}`}>{comment.comment}</Link>
        </li>
    ))

    return (
        <div>
            <h1>Comment</h1>
            {Comment}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)