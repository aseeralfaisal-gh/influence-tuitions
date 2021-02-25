import { Link } from 'react-router-dom';
import './Navbar.css';
import mainLogo from '../logos/iTU-DP-WEB.png';
import { useState } from 'react';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    
  const pressed = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

    return (
        <div className='parent'>
            <div className='mainLogo'>
                <img src={mainLogo} width='80rem' height='80rem' />
                <h1>Influence Tuitions</h1>
            </div>
            <div className='desktop-nav'>
                <Link to='/' className='btn'><i id='icons' class="fas fa-mobile-alt"></i> Call Now</Link>
                <Link to='/' className='btn'><i id='icons' class="fab fa-facebook-f"></i> Facebook</Link>
                <Link to='/' className='btn'><i id='icons' class="fas fa-info"></i> About</Link>
            </div>
            <div className="burgMenu" onClick={pressed}>
                <>
                    <i id='menu' className={(click) ? 'fas fa-times-circle' : 'fa fa-stream'} onClick={() => {
                        setClick(!click)
                    }}>
                    </i>
                    <div className={(click) ? 'menu-mobile' : 'menu-mobile-passive'}>
                        <div className={(click) ? 'backdrop' : 'backdrop-none'}>
                            <Link to='/' className='btnM'><i id='iconsM' class="fas fa-mobile-alt"></i>
                                <h2 class="animate__animated animate__slideInRight">Call Now</h2></Link>
                            <Link to='/' className='btnM'><i id='iconsM' class="fab fa-facebook-f"></i>
                                <h2 class="animate__animated animate__slideInRight">Facebook</h2></Link>
                            <Link to='/' className='btnM'><i id='iconsM' class="fas fa-info"></i>
                                <h2 class="animate__animated animate__slideInRight">About</h2></Link>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Navbar;
