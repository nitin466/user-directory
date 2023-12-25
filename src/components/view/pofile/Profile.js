import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./profile.css";
import PostCard from "../post/PostCard";
import CardModal from "../../CardModal";
import Timer from "../timer/Timer";

const DetailSectionLeft = ({item1, item2, item3}) => {
    return(
        <div className="detail-secion-1">
            <div className="text1">{item1}</div>     
            <div className="text2"><span className="item1">{item2}</span><span className="bar"> | </span> <span className="item2">{item3}</span></div>     
        </div>
    )
}
const DetailSectionRight = ({item1, item2, item3}) => {
    return(
        <div className="detail-secion-2">
            <div className="address"><span>{`Address: ${item1.street}, ${item1.city}, ${item1.zipcode}`}</span></div>     
            <div className="text2"><span>{item2}</span> <span className="bar">|</span> <span>{item3}</span></div>     
        </div>
    )
}

const Profile = () => {

    const navigate = useNavigate();
    const {state} = useLocation();

    const [modalData, setModalData] = useState({ show: false, data: null });
    const {name, username, company, address, email, phone, postDetail} = state;
    
    const handleCardClick = (item) => {
        setModalData({show:true, data: item})
    }

    const posts = postDetail?.map((post) => {
        return   (< PostCard key={post.id} postContent={post} handleSelect={handleCardClick} />)
    })
 
    const handleBack = () => {
        navigate(-1);
    }
    
    const handleCloseModal = () => {
        setModalData({ show:false, data: null })
    }

    return (
        <>
            <div className="profile">
                <button className="btn" onClick={handleBack}>Back</button>
                <h1>{state.name}</h1>
                <Timer />
                <div className="profile-card">
                    <DetailSectionLeft item1={name} item2={username} item3={company.catchPhrase}/>
                    <DetailSectionRight item1={address} item2={email} item3={phone}/>
                </div>
                <div className="posts">
                    {posts}
                </div>
            </div>
            
            { modalData.show && <CardModal data={modalData.data} handleClose={handleCloseModal}></CardModal> }
        </>
    )
}

export default Profile;