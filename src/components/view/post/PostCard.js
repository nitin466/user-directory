
import "./post.css";

const PostCard = ({postContent, handleSelect, style}) => {
    return (
        <div className="post-card" style={style} key={postContent.id} onClick={() =>handleSelect(postContent)}>
            <div className="post-title">{postContent.title}</div>
            <div className="post-content">{postContent.body}</div>
        </div>
    )
}

export default PostCard;