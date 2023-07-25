import classNames from 'classnames';
import styles from './Header.module.scss';
// LOGO 
import logo from '~/assets/imgs/sv_logo_dashboard.png';
// ICON 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// BOSSTRAP 5
import 'bootstrap/dist/scss/bootstrap.min.css';

const cs = classNames.bind(styles);
function Header() {
    return (
        <div className={cs('Header container-fluid justify-content-between fixed-top shadow ')}>
            <div className={cs('container d-flex justify-content-between pt-3 col-xs-12')}>
                {/* <!-- Header  --> */}
                <div>
                    <img src={logo} alt="Logo_" />
                </div>
                <div className={cs('')}>
                    <div className={cs('d-flex')}>
                        <div className={cs('p-2')}>
                            <a className={cs('fw-bold')} href="">
                                Trang chủ
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href="">
                                Về chúng tôi
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href="">
                                Khóa Học STEM
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href="">
                                Khóa Học
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href="">
                                Mentor
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href="">
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cs('cart_img')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div id="bars" className={cs('mt-4')}>
                    <i className={cs('fa-solid fa-bars')}></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
