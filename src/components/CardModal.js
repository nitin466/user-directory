
import "./modal.css";
import PostCardModal from "./view/post/PostCardModal";

const CardModal = ({ handleClose, data, children }) => {
    return (
        <>
            <div className="overlay">
                <div className="background" onClick={handleClose}>
                    <div className="container" onClick={(e) => e.stopPropagation()}>
                        <div className="action">
                            <button onClick={handleClose}>Close</button>
                        </div>
                        {children ? children : <PostCardModal postContent={data} />}
                    </div>
                </div>
            </div>
        </>
    )
}


export default CardModal;