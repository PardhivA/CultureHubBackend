import React, { useContext, useEffect, useState } from "react";
import "./FollowersCard.css";

import { Followers } from "../../Data/followersData.js";
import useFetch from "../../hooks/usefetch.js";
import { AuthContext } from "../../context/AuthContext.js";
import Followbox from "./Followbox.jsx";
const FollowersCard = () => {
  const { data, reFetch } = useFetch("https://culture1.onrender.com/api/user");
  const { user } = useContext(AuthContext);

  return (
    <div className="FollowersCard">
      <span>Connect with others..</span>

      {data.map((follower, id) => {
        if (user && follower._id === user.id) {
          return <></>;
        }
        return id < 5 && <Followbox follower={follower} reFetch={reFetch} />;
      })}
    </div>
  );
};

export default FollowersCard;
