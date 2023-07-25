import classNames from 'classnames/bind';
import style from './SideBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function SideBar() {
    return ( 
        <h2 className={cx('color')}>Looo</h2>
     );
}

export default SideBar;