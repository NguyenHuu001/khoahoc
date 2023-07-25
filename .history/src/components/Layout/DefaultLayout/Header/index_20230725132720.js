import classNames from 'classnames';
import styles from './Header.module.scss'
const cs = classNames.bind(styles)
function Header() {
    return ( 
        <header className={cs('wrapper')}> </header>
     );
}

export default Header;