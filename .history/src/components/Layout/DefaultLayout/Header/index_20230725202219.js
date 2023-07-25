import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// LOGO
import logo from '~/assets/imgs/sv_logo_dashboard.png';
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const cs = classNames.bind(styles);

function Header() {
    return (
       <h2 classNames={cs()}>Chào</h2>
    );
}

export default Header;
