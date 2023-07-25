import classNames from 'classnames';
import styles from './Header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const cs = classNames.bind(styles)
function Header() {
    return ( 
        <header className={cs('container')}> </header>
     );
}

export default Header;