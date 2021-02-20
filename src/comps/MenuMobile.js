import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const MenuMobile = ({open, children}) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
        {children}
        </>,
        document.getElementById('MenuMobile')
    )
}

export default MenuMobile





