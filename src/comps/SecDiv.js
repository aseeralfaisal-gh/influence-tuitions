import './SecDiv.css';
import bulb from '../logos/bulb-01.png';

const SecDiv = () => {
    return (
        <>
        <div className='SecDiv'>
            {/* <i className="far fa-hourglass"></i> */}
            <img className='bulb' src={bulb} width='600rem' height='600rem' />
            <div className='des'>
                <h2 className='te'>Are you looking for qualified teacher?</h2>
                <h3 className='te'>Then this is the right place for you</h3>
                <h4 className='te'>We provide experienced tutors for students at home.</h4>
            </div>
        </div>
        </>
    )
}

export default SecDiv;
