import React from 'react';
import './UserCard.scss'

function UserCard(props){
    console.log(props.followers)
    return(
        <>
        <div className="github-profile">
            <h1>{props.userInfo.name}</h1>
            <h2>{props.userInfo.login}</h2>
            <img src={props.userInfo.avatar_url} alt="avatar" />
        </div>
        <div className="follower-cards">
            {props.followers.map(follower => 
                <div key={follower.id}>
                    <h2>{follower.login}</h2>
                    <img src={follower.avatar_url} alt="avatar" />
                </div>
            )}

        </div>
        </>
    )
};

export default UserCard;