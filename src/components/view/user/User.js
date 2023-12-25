import  "./user.css";

const User = ({user, handleUserClick}) => {
    const { id, name } = user;
    const post  = user["postDetail"];
    return(
        <div className="user-container" onClick={() => handleUserClick(id)}>
            <div className="user-name">Name : {name} </div>
            <div className="post-count">Post : {post?.length}</div>
        </div>
    )
}
export default User ;