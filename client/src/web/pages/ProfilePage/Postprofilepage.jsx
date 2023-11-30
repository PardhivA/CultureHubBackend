import React, { useContext } from "react";
import Cover from "../../../images/cover.jpg";
import Profile from "../../../images/profileImg.jpg";
import "./../../components/ProfileCard/ProfileCard.css";
import "./ProfilePage.css";
import { AuthContext } from "../../context/AuthContext";
import PostFeed from "../../components/Feed/PostFeed/PostFeed";
import useFetch from "../../hooks/usefetch";
import Posts from "../../components/home/Posts/Posts";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import useFetch2 from "../../hooks/usefetch2";

const PostprofilePage = () => {
  const ProfilePage = true;
  const { user, dispatch } = useContext(AuthContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data2 } = useFetch2(
    `https://culture1.onrender.com/api/user/${id}/profile`
  );

  const { data, loading, reFetch } = useFetch(
    `https://culture1.onrender.com/api/post/${id}/userposts`
  );
  let count = 0;

  console.log(user);

  return (
    <>
      <Navbar />
      <div className="ProfilePage">
        <div className="ProfilePageImages">
          <img className="BigImage" src={Cover} alt="" />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <img
              className="SmallImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEkveEWaWSZ6ytqtnxs7r3ObfsL07gjHsZg&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="ProfilePageName">
          {user && <span>{data2.name}</span>}
          {!user && <span>Anonymous</span>}
          {/* <span>Explorer | Coder | Culture Lover</span> */}
        </div>

        <div className="ProfilePagefollowStatus">
          <hr />
          <div>
            <div className="ProfilePagefollow">
              <span>{data2.following}</span>
              <span>Following</span>
            </div>
            <div className="ProfilePagevl"></div>
            <div className="ProfilePagefollow">
              <span>{data2.followers}</span>
              <span>Followers</span>
            </div>
          </div>
          <hr />
        </div>
        {ProfilePage ? "" : <span>My Profile</span>}
        <div className="ProfilePagePostDisplay">
          {
            // data.filter((item, key)=>true).map((item)=>
            //     (
            //     <div style={{width:"20rem",height:"20rem", objectFit:"cover",scale:"0.95", margin:"0 0 0 0.6rem"}}>
            //       <img src={item.image} style={{width:"20rem",height:"20rem", objectFit:"cover"}}></img>
            //         {/* <Posts item={item} key={item._id} margin="0 0 0 0"/> */}
            //     </div>
            // ))
          }

          <div className="ProfilePagePostDisplayColumn">
            {data
              .filter((item, key) => key % 2 == 0)
              .reverse()
              .map((item) => (
                <div
                  style={{
                    width: "100%",
                    scale: "0.95",
                    margin: "-0.5rem 0 0 1rem",
                  }}
                >
                  <Posts
                    reload={reFetch}
                    item={item}
                    key={item._id}
                    margin="0 0 0 0"
                    height="20rem"
                  />
                </div>
              ))}
          </div>

          <div className="ProfilePagePostDisplayColumn">
            {data
              .filter((item, key) => key % 2 == 1)
              .reverse()
              .map((item) => (
                <div
                  style={{
                    width: "100%",
                    scale: "0.95",
                    margin: "0 1rem 0 1.5rem",
                  }}
                >
                  {/* <span>{user.id}</span> */}
                  <Posts
                    reload={reFetch}
                    item={item}
                    key={item._id}
                    margin="0 0 0 0"
                    height="20rem"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostprofilePage;
