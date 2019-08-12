import React from "react";
import "./UserCard.scss";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

function UserCard(props) {
  console.log(props.followers);
  return (
    <>
      <Card className="github-profile">
        <h1>{props.userInfo.name}</h1>
        <h2>{props.userInfo.login}</h2>
        {/* <img src={props.userInfo.avatar_url} alt="avatar" /> */}
        <CardMedia
          className="userPic"
          component="img"
          alt="User avatar"
          image={props.userInfo.avatar_url}
        />
      </Card>
      <Card className="follower-cards">
        {props.followers.map(follower => (
          <div key={follower.id}>
            <h2>{follower.login}</h2>
            {/* <img src={follower.avatar_url} alt="avatar" /> */}
            <CardMedia
          className="userPic"
          component="img"
          alt="User avatar"
          image={follower.avatar_url}
        />
          </div>
        ))}
      </Card>
    </>
  );
}

export default UserCard;
