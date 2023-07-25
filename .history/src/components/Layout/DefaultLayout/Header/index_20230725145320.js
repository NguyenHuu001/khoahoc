import classNames from 'classnames';
import styles from './Header.module.scss';
import logo from '~/assets/imgs/sv_logo_dashboard.png';
import iconCart from '~/assets/imgs/icon-shopping-cart.jpg';

const cs = classNames.bind(styles);
function Header() {
    return (
        <div className={cs('container-fluid justify-content-between header fixed-top shadow ')}>
            <div className={cs('container justify-content-between header fixed-top shadow')}>
                {/* <!-- Header  --> */}
                <div>
                    <img src={logo} alt='Logo_' />
                </div>
                <div className={cs('none')}>
                    <div className={cs('d-flex')}>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href=''>
                                Trang chủ
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href=''>
                                Về chúng tôi
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href=''>
                                Khóa Học STEM
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href=''>
                                Khóa Học
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href=''>
                                Mentor
                            </a>
                        </div>
                        <div className={cs('header_items p-2')}>
                            <a className={cs('fw-bold')} href=''>
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cs('cart_img')}>
                    <img className='' src={iconCart} alt='' />
                </div>
                <div id='bars' className={cs('mt-4')}>
                    <i className={cs('fa-solid fa-bars')}></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
