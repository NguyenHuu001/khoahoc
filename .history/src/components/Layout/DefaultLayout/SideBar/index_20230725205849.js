import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
import style from './SideBar.module.scss'
function SideBar() {
    return ( 
        <h2 className={style['color']}>Looo</h2>
     );
}

export default SideBar;