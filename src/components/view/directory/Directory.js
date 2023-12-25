import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./directory.css";
import { BASE_URL } from '../../../constants';
import Loading from '../../common/Loading';
import User from '../user/User';



const Directory = () => {
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserClick = (id) => {
    navigate(`/user/${id}`, { state: allUser[id - 1] });

  }

  async function fetchPost(id) {
    const resp = await fetch(`${BASE_URL}/posts/?userId=${id}`);
    return resp.json();
  }

  

  useEffect(() => {

    async function fetchUser() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/users`);
        const user = await response.json();
        setAllUser(user);
  
        const res = await user.map((item) => fetchPost(item.id))
        Promise.all(res).then((item) => {
          item.forEach((post, idx) => user[idx].postDetail = post)
        })
          .finally(() => {
            setAllUser(user);
            setIsLoading(false);
          })
      }
  
      catch (ex) {
        console.log('failed', ex);
        setIsLoading(false);
      }
    }
    
    fetchUser()
  }, []);


  const userList = allUser && allUser.map((item) => {
    return <User key={item.id} user={item} handleUserClick={handleUserClick} />
  })

  return (
    <>
      <div className="directory">
        <h1>Directory</h1>
        {userList}
      </div>
      { isLoading && <Loading />}

    </>)
}

export default Directory;