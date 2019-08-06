import React from 'react';


function UserCard(props){
    console.log(props.userCards.login)
    return(
        <>
        <div className="github-profile">
            <h1>{props.userCards.name}</h1>
            <h2>{props.userCards.login}</h2>
            <img src={props.userCards.avatar_url} alt="avatar" />
        </div>
        <div className="follower-cards">
            
        </div>
        </>
    )
};

export default UserCard;