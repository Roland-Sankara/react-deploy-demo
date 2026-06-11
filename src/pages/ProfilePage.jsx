import profilePic from "../assets/sample-photo.jpg";
import ProfileCard from '../components/ProfileCard';

function ProfilePage(){
    return(
        <div>
            <h1>Profile Page</h1>
            <div className='flex'>
            <ProfileCard imgUrl={profilePic} name="Job"/>
            <ProfileCard imgUrl="https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=eaVcXTz5" name="Sheillah"/>
            </div>
        </div> 
    )
}

export default ProfilePage;