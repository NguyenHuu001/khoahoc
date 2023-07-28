import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// IMG
import logo from '~/assets/imgs/sv_logo_dashboard.png';
import cart from '~/assets/imgs/icon-shopping-cart.jpg';
import logoMobile from '~/assets/imgs/icon-logo-mobile.png';
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons';

const s = classNames.bind(styles);

function Header() {
    return (
        <>
            <div className={s('coating')}>
                <div className={s('sidebar_content')}>
                    <div className={s('sidebar_top', 'd-flex', 'justify-content-between', 'align-items-center')}>
                        <img src={logoMobile} alt="" />
                        <FontAwesomeIcon icon={faX} />
                    </div>
                    <div className={s('sidebar_cart')}>
                        <a href="#">
                            <img src={cart} alt="" />
                            <span></span>
                        </a>
                    </div>
                    <div className={s('sidebar_menu ')}>
                        <ul className=''>
                            <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>Trang chủ</li>
                            <li className={s('text-uppercase', 'pt-3', 'position-relative', 'fw-bolder')}>
                                <div className={s('d-flex', 'justify-content-between')}>
                                    <p className={s('mb-0')}>Về chúng tôi</p>
                                    <div className={s('wrap_sign')}>
                                        <FontAwesomeIcon className={s('menu_plus')} icon={faPlus} />
                                        <FontAwesomeIcon className={s('menu_minus')} icon={faMinus} />
                                    </div>
                                </div>
                                <ul className={s('ps-4', 'ul_down')}>
                                    <li className={s('text-uppercase', 'pt-3')}>Câu chuyện founder</li>
                                    <li className={s('text-uppercase', 'pt-3')}>Nền tảng lms</li>
                                </ul>
                            </li>
                            <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>Khóa học stem</li>
                            <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>Khóa học</li>
                            <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>mentor</li>
                            <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>blog</li>
                        </ul>
                    </div>
                    <div className={s('input_text')}>
                        <input className={s('"rounded', 'p-2"')} type="text" placeholder="Tìm kiếm khóa học" />
                        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                    </div>
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
                        <img className={s('img_cart')} src={cart} alt="" />
                    </div>
                    <div className={s('mt-4', 'bars')}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
