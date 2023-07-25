import classNames from 'classnames';
import styles from './Header.module.scss';
import img from '~/assets/imgs/sv_logo_dashboard.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const cs = classNames.bind(styles);
function Header() {
    return (
        <div className={cs('container-fluid justify-content-between header fixed-top shadow ')}>
            <div className={cs('container justify-content-between header fixed-top shadow')}>
                {/* <!-- Header  --> */}
                <div>
                    <img src={img} alt="Logo_" />
                </div>
                <div className={cs('none')}>
                    <div className={cs('d-flex')}>
                        <div classN={cs('header_items p-2')}>
                            <a classN={cs('fw-bold')} href="">
                                Trang chủ
                            </a>
                        </div>
                        <div classN={cs('header_items p-2')}>
                            <a classN={cs('fw-bold')} href="">
                                Về chúng tôi
                            </a>
                        </div>
                        <div classN={cs('header_items p-2')}>
                            <a classN={cs('fw-bold')} href="">
                                Khóa Học STEM
                            </a>
                        </div>
                        <div classN={cs('header_items p-2')}>
                            <a classN={cs('fw-bold')} href="">
                                Khóa Học
                            </a>
                        </div>
                        <div classN={cs('header_items p-2')}>
                            <a classN={cs('fw-bold')} href="">
                                Mentor
                            </a>
                        </div>
                        <div classN={cs('header_items p-2')}>
                            <a classN={cs('fw-bold')} href="">
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
                <div classN="cart_img">
                    <img classN="" src="img/icon-shopping-cart.jpg" alt="" />
                </div>
                <div id="bars" classN="mt-4">
                    <i classN="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
