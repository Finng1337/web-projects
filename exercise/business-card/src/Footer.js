import TwitterIcon from './images/twitter-icon.svg';
import FacebookIcon from './images/facebook-icon.svg';
import InstagramIcon from './images/instagram-icon.svg';
import GitHubIcon from './images/github-icon.svg';

export default function Footer() {
    return (
        <footer>
            <a href={'#'}><img src={TwitterIcon} alt={'Twitter'}/></a>
            <a href={'#'}><img src={FacebookIcon} alt={'Facebook'}/></a>
            <a href={'#'}><img src={InstagramIcon} alt={'Instagram'}/></a>
            <a href={'#'}><img src={GitHubIcon} alt={'GitHub'}/></a>
        </footer>
    );
}