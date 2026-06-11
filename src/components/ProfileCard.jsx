function ProfileCard(props){
    return(
        <div className='profile'>
            <img className="profile-img" src={props.imgUrl} alt="profile pic" />
            <h1>{props.name}</h1>
      </div>
    )
}

export default ProfileCard;