import { Link } from 'react-router-dom';
import './Navbar.css';
import mainLogo from '../logos/iTU-DP-WEB.png';
import {useState} from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);

    return (
        <div className='parent'>
            <Link to='/' className='mainLogo'>
                <img src={mainLogo} width='80rem' height='80rem' />
                <h1>Influence Tuitions</h1>
            </Link>
            <div className='navi'>
                <Link to='/' className='btn'><i id='icons' class="fas fa-mobile-alt"></i> Call Now</Link>
                <Link to='/' className='btn'><i id='icons' class="fab fa-facebook"></i> Facebook</Link>
                <Link to='/' className='btn'><i id='icons' class="fas fa-info"></i> About</Link>
            </div>
            <div className="burgMenu">
                <i id='menu' className={(click) ? 'fas fa-stream': 'fas fa-times-circle'} onClick={() =>{
                    setClick(!click)
                }}></i>
            </div>
        </div>
    )
}

export default Navbar;
