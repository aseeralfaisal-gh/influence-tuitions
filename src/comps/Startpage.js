import '../comps/Startpage.css';
import smileyBoys from '../logos/smiley-boyz.png';

const Startpage = ({ text, desc, par, par1 }) => {
    return (
        <div className='head-title'>
            <img src={smileyBoys} width='600rem' height='600rem' />
            <div className='logo'>
                <h1 className='title' style={{ fontSize: '6.5rem'}}>{text}</h1>
                <p className='title' style={{ fontSize: '2rem', marginTop: '-2rem'}}>{desc}</p>
                <p className='title' style={{ fontSize: '1.1rem', marginTop: '0rem'}}>{par}</p>
                <p className='title' style={{ fontSize: '1.1rem', marginTop: '0rem'}}>{par1}</p>
            </div>
        </div>
    )
}

export default Startpage;
