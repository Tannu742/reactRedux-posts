import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../../assets/img/Avatar.png'
import decorLogo from '../../assets/img/decorationLogo.png'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const AboutCard = () => {
    return (
        <div className='aboutCard'>
            <div className='aboutMeCard row align-items-center'>
                <img height={14} width={24} src={decorLogo} alt="decorLogo" />
                <h3>About me</h3>
            </div>
            <div className='row align-items-center'>
                <img height={80} width={80} src={avatar} alt="avtar" />
                <span>Founder & Editor</span>
            </div>
            <p className='px-10 py-10'>Hello! My name is Adriana Martins working from Chile.
                I create some Ghost and Wordpress themes for differents markets,
                also, i offer live support via our ticket system.</p>
            <div className='row aboutMecardIcons align-items-center'>
                <FontAwesomeIcon icon={faTwitter} />
                <a href="/twitter">twitter</a>
                <FontAwesomeIcon icon={faFacebook} />
                <a href="/facebook">FaceBook</a>
            </div>
        </div>
    );
}

export default AboutCard;
