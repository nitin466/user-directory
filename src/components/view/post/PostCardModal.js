
import "./post.css";

const PostCardModal = ({postContent}) => {
    return (
        <div className="post-card-modal">
            <div className="post-title">{postContent.title}</div>
            <div className="post-content">{postContent.body}</div>
        </div>
    )
}

export default PostCardModal;