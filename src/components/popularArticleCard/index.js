import decorLogo from '../../assets/img/decorationLogo.png';

const popularCard = () => {
    return (
        <div className='popularCard'>
             <div className='aboutMeCard row align-items-center'>
                <img height={14} width={24} src={decorLogo} alt="decorLogo" />
                <h3>Popular Articles</h3>
            </div>
        </div>
    );
}

export default popularCard;
