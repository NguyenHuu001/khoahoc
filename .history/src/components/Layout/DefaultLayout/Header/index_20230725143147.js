import classNames from 'classnames';
import styles from './Header.module.scss'
import img from '~/assets/imgs/sv_logo_dashboard.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const cs = classNames.bind(styles)
function Header() {
    return ( 
        <div className={cs('container-fluid justify-content-between header fixed-top shadow ')}>
            <div className={cs('container justify-content-between header fixed-top shadow')}> 
                {/* <!-- Header  --> */}
                <div>
                    <img src={img} alt='Logo_'/>
                </div>
                <div className={cs('none')}>
                    <div className={cs('d-flex')}>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Header;