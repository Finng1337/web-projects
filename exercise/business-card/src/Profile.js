import Contacts from "./Contacts";
import ProfilePicture from './images/profile-picture.png'

export default function Profile() {
    return (
        <header>
            <img src={ProfilePicture} alt={'Profile'} className={'profilePic'}/>
            <h1>Laura Smith</h1>
            <h2 className={'career'}>Frontend Developer</h2>
            <h3 className={'website'}>laurasmith.website</h3>
            <Contacts/>
        </header>
    );
}