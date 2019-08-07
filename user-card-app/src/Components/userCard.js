import React from 'react';


function UserCard(props){
    console.log(props.userInfo.login)
    return(
        <>
        <div className="github-profile">
            <h1>{props.userInfo.name}</h1>
            <h2>{props.userInfo.login}</h2>
            <img src={props.userInfo.avatar_url} alt="avatar" />
        </div>
        <div className="follower-cards">

        </div>
        </>
    )
};

export default UserCard;