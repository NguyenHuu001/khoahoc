import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// IMG
import logo from '~/assets/imgs/sv_logo_dashboard.png';
import cart from '~/assets/imgs/icon-shopping-cart.jpg';
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div id="coating">
        <div class="sidebar_content">
            <div class="sidebar_top d-flex justify-content-between align-items-center">
                <img src="img/icon-logo-mobile.png" alt="">
                <i id="close_coating" class="fa-solid fa-xmark"></i>
            </div>
            <div class="sidebar_cart">
                <a href="#" style="text-decoration: none;">
                    <img src="img/icon-shopping-cart.jpg" alt="">
                    <span></span>
                </a>
            </div>
            <div class="sidebar_menu ">
                <ul>
                    <li class="text-uppercase pt-3 fw-bolder">Trang chủ</li>
                    <li class="text-uppercase pt-3 position-relative fw-bolder ">
                        <div class="d-flex justify-content-between">
                            <p class="mb-0 ">Về chúng tôi</p>
                            <div class="wrap_sign">
                                <i class="fa-solid fa-plus mt-1 menu_plus"></i>
                                <i class="fa-solid fa-minus mt-1 menu_minus"></i>
                            </div>
                        </div>
                        <ul class="ps-4 ul_down" style="list-style: none;">
                            <li class="text-uppercase pt-3">Câu chuyện founder</li>
                            <li class="text-uppercase pt-3">Nền tảng lms</li>
                        </ul>
                    </li>
                    <li class="text-uppercase pt-3 fw-bolder">Khóa học stem</li>
                    <li class="text-uppercase pt-3 fw-bolder">Khóa học</li>
                    <li class="text-uppercase pt-3 fw-bolder">mentor</li>
                    <li class="text-uppercase pt-3 fw-bolder">blog</li>
                </ul>
            </div>
            <div class="input_text">
                <input class="rounded p-2" type="text" placeholder="Tìm kiếm khóa học">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>
        // Header 
        <div className={cx('Header', ' container-fluid', 'justify-content-between', 'fixed-top', ' shadow ')}>
            <div className={cx('container', 'd-flex', 'justify-content-between', 'mt-5', 'col-xs-12', 'p-0')}>
                {/* <!-- Header  --> */}
                <div>
                    <img src={logo} alt="Logo_" />
                </div>
                <div className={cx('chao')}>
                    <div className={cx('d-flex')}>
                        <div className={cx('p-2', 'ps-3')}>
                            <a className={cx('fw-bold', 'items')} href="">
                                Trang chủ
                            </a>
                        </div>
                        <div className={cx('header_items', 'p-2', 'ps-3')}>
                            <a className={cx('fw-bold', 'items')} href="">
                                Về chúng tôi
                            </a>
                        </div>
                        <div className={cx('header_items', 'p-2', 'ps-3')}>
                            <a className={cx('fw-bold', 'items')} href="">
                                Khóa Học STEM
                            </a>
                        </div>
                        <div className={cx('header_items', 'p-2', 'ps-3')}>
                            <a className={cx('fw-bold', 'items')} href="">
                                Khóa Học
                            </a>
                        </div>
                        <div className={cx('header_items', 'p-2', 'ps-3')}>
                            <a className={cx('fw-bold', 'items')} href="">
                                Mentor
                            </a>
                        </div>
                        <div className={cx('header_items', 'p-2', 'ps-3')}>
                            <a className={cx('fw-bold', 'items')} href="">
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('cart_img', 'mt-2')}>
                    <img class={cx('img_cart')} src={cart} alt="" />
                </div>
                <div className={cx('mt-4','bars')}>
                <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    );
}

export default Header;
