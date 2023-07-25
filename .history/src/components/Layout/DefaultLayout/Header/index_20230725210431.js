import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// LOGO
import logo from '~/assets/imgs/sv_logo_dashboard.png';
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('Header',' container-fluid','justify-content-between','fixed-top',' shadow ')}>
            <div className={cx('container','d-flex','justify-content-between pt-3 col-xs-12')}>
                {/* <!-- Header  --> */}
                <div>
                    <img src={logo} alt="Logo_" />
                </div>
                <div className={cx('chao')}>
                    <div className={cx('d-flex')}>
                        <div className={cx('p-2')}>
                            <a className={cx('fw-bold')} href="">
                                Trang chủ
                            </a>
                        </div>
                        <div className={cx('header_items p-2')}>
                            <a className={cx('fw-bold')} href="">
                                Về chúng tôi
                            </a>
                        </div>
                        <div className={cx('header_items p-2')}>
                            <a className={cx('fw-bold')} href="">
                                Khóa Học STEM
                            </a>
                        </div>
                        <div className={cx('header_items p-2')}>
                            <a className={cx('fw-bold')} href="">
                                Khóa Học
                            </a>
                        </div>
                        <div className={cx('header_items p-2')}>
                            <a className={cx('fw-bold')} href="">
                                Mentor
                            </a>
                        </div>
                        <div className={cx('header_items p-2')}>
                            <a className={cx('fw-bold')} href="">
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('cart_img mt-2')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div id="bars" className={cx('mt-4')}>
                    <i className={cx('fa-solid fa-bars')}></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
