import profilePic from "../assets/sample-photo.jpg";
import ProfileCard from '../components/ProfileCard';

import {useEffect, useState} from "react";

function ProfilePage(){

    let [users, setUsers] = useState(null);


    // Runs after the 1st page load 
    useEffect(function(){
        fetch("https://randomuser.me/api/?results=5").then(function(response){
            response.json().then(function(data){
                setUsers(data.results)
            }) 
        })

        // fetch("https://dummyjson.com/users").then(function(response){
        //     response.json().then(function(data){
        //         setUsers(data.users)
        //     }) 
        // })

    },[])

    // Runs at the the 1st load
    return(
        <div>
            <h1>Profile Page</h1>
            <div className='flex'>
            
            {
                (users !== null) ? 

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <ProfileCard imgUrl={users[0].picture.large} name={users[0].name.first}/>
                        <ProfileCard imgUrl={users[1].picture.large} name={users[1].name.first}/>
                    </div>

                    :

                    <h1>Loading....</h1>
                    
            }
            

            </div>
        </div> 
    )
}

export default ProfilePage;