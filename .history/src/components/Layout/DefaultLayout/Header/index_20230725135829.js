import classNames from 'classnames';
import styles from './Header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const cs = classNames.bind(styles)
function Header() {
    return ( 
        <div className={cs('container justify-content-between header fixed-top shadow')}> 
            {/* <!-- Header  --> */}
            <div>
                i
            </div>
        </div>
     );
}

export default Header;