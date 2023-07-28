import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// IMG
import logo from '~/assets/imgs/sv_logo_dashboard.png';
import cart from '~/assets/imgs/icon-shopping-cart.jpg';
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const s = classNames.bind(styles);

function Header() {
    return (
        <div>
            <div className={s('coating')}>
            <div className={s('sidebar_content')}>
                <div></div>
            </div>
            </div>
            {/* // Header */}
            <div className={s('Header', ' container-fluid', 'justify-content-between', 'fixed-top', ' shadow ')}>
                <div className={s('container', 'd-flex', 'justify-content-between', 'mt-5', 'col-xs-12', 'p-0')}>
                    {/* <!-- Header  --> */}
                    <div>
                        <img src={logo} alt="Logo_" />
                    </div>
                    <div className={s('chao')}>
                        <div className={s('d-flex')}>
                            <div className={s('p-2', 'ps-3')}>
                                <a className={s('fw-bold', 'items')} href="">
                                    Trang chủ
                                </a>
                            </div>
                            <div className={s('header_items', 'p-2', 'ps-3')}>
                                <a className={s('fw-bold', 'items')} href="">
                                    Về chúng tôi
                                </a>
                            </div>
                            <div className={s('header_items', 'p-2', 'ps-3')}>
                                <a className={s('fw-bold', 'items')} href="">
                                    Khóa Học STEM
                                </a>
                            </div>
                            <div className={s('header_items', 'p-2', 'ps-3')}>
                                <a className={s('fw-bold', 'items')} href="">
                                    Khóa Học
                                </a>
                            </div>
                            <div className={s('header_items', 'p-2', 'ps-3')}>
                                <a className={s('fw-bold', 'items')} href="">
                                    Mentor
                                </a>
                            </div>
                            <div className={s('header_items', 'p-2', 'ps-3')}>
                                <a className={s('fw-bold', 'items')} href="">
                                    Blog
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={s('cart_img', 'mt-2')}>
                        <img class={s('img_cart')} src={cart} alt="" />
                    </div>
                    <div className={s('mt-4', 'bars')}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
