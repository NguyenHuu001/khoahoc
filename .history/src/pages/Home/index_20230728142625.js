import classNames from 'classnames/bind';
import style from './Home.module.scss';
// IMG
import anh from '~/assets/imgs/item_C_Sap.png';
import level from '~/assets/imgs/icon-title-course-4.png';
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarDay,
    faCircleCheck,
    faFire,
    faGears,
    faQrcode,
    faStar,
    faTrophy,
    faUser,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
// Thư viện slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const s = classNames.bind(style);

function Home() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    nextArrow: <div className={s('custom-next-arrow')}>Next</div>,
                    prevArrow: <div className={s('custom-prev-arrow')}>Previous</div>,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    nextArrow: <div className={s('custom-next-arrow')}>Next</div>,
                    prevArrow: <div className={s('custom-prev-arrow')}>Previous</div>,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <div className={s('custom-next-arrow')}>Next</div>,
                    prevArrow: <div className={s('custom-prev-arrow')}>Previous</div>,
                },
            },
        ],
    };
    return (
        <div className={s('wrap_baner', 'p-0', 'col-md-12', 'col-xs-12')}>
            <div className={s('baner_one', 'd-flex', 'justify-content-center')}>
                <div
                    className={s(
                        'content_baner_one',
                        'col-md-9',
                        'col-xs-12',
                        'col-sm-12',
                        'd-flex',
                        'flex-column',
                        'align-items-center',
                    )}
                >
                    <h1 className={s('pb-5', 'pt-5', 'title_top')}>Khởi đầu sự nghiệp của bạn</h1>
                    <h1 className={s('pb-5', 'title_two', 'col-sm-12')}>
                        Trở thành lập trình viên chuyên nghiệp tại BSMART
                    </h1>
                    <span className={s('pb-5', 'pe-2', 'ps-2', 'content_content')}>
                        Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART sẽ
                        giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành lập
                        trình viên chuyên nghiệp
                    </span>
                    <div className={s('pb-5', 'mb-5')}>
                        <button className={s('button_kh')}>Xem khóa học</button>
                    </div>
                </div>
            </div>
            {/* Về chúng tôi */}
            <div className={s('baner_two')}>
                <div
                    className={s(
                        'container-fluid',
                        'align-items-center',
                        'p-0',
                        'd-flex',
                        'col-md-10',
                        'col-sm-12',
                        'col-xs-12',
                    )}
                >
                    <div className={s('container', 'col-md-12', 'col-sm-12', 'col-xs-12')}>
                        <h1 className={s('text-center', 'mb-5', 'about_us')}>Về chúng tôi</h1>
                        <div className={s('row', 'content_two', 'pb-5')}>
                            <div className={s('col-sm-12', 'col-md-6', 'p-0')}>
                                <p className={s('fw-bolder', 'ps-2', 'pe-2')}>
                                    BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về đào tạo lập trình
                                    viên, kết nối Mentor và Mentee. Với đội ngũ Mentor giàu kinh nghiệm và chuyên môn,
                                    BSMART cam kết mang đến các khóa học lập trình chất lượng nhất. Hệ thống khóa học đa
                                    dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể lựa chọn các khóa
                                    học phù hợp với nhu cầu và khả năng của mình. BSMART cập nhật và áp dụng những công
                                    nghệ mới, giúp học viên và Mentor được tiếp cận với những kiến thức và kỹ năng mới
                                    nhất trong lập trình. Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên
                                    trong quá trình học tập và phát triển sự nghiệp sau khi tốt nghiệp.
                                </p>
                                <div className={s('d-flex', 'justify-content-center', 'mt-5', 'col-md-12')}>
                                    <button className={s('fw-bolder', 'content_two_btn', 'p-3')}>Xem khóa học</button>
                                    <button className={s('fw-bolder', 'content_two_btn', 'p-3')}>Hỗ trợ tư vấn</button>
                                </div>
                            </div>
                            <div className={s('img_baner', 'col-sm-12', 'col-md-6', 'd-flex', 'align-items-center')}>
                                <div className={s('img_baner_two')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Điểm ưu việt  */}

            <div className={s('container-fluid', 'vantage_Point', 'p-0')}>
                <div className={s('container')}>
                    <h1 className={s('text-center', 'mb-5', 'vantage_title', 'mt-5')}>Điểm ưu việt tại BSmart</h1>
                    <div className={s('row', 'set_height_one')}>
                        <div className={s('col-sm-4', 'pe-5')}>
                            <div className={s('wap_icon', 'd-flex', 'align-items-center')}>
                                <FontAwesomeIcon icon={faCircleCheck} className={s('pe-3', 'icon_check')} />
                                <h3 className={s('fw-bolder', 'vantage_title_chil', 'mb-0')}>
                                    Học theo lộ trình, có định hướng
                                </h3>
                            </div>
                            <p className={s('vantage_content', 'mt-3')}>
                                BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và
                                niềm đam mê lập trình của bạn để có việc ngay sau khi học.
                            </p>
                        </div>
                        <div className={s('col-sm-4', 'pe-5')}>
                            <div className={s('wap_icon', 'd-flex', 'align-items-center')}>
                                <FontAwesomeIcon icon={faGears} className={s('pe-3', 'icon_check')} />
                                <h3 className={s('fw-bolder', 'vantage_title_chil', 'mb-0')}>
                                    Nền tảng cốt lõi trong lập trình
                                </h3>
                            </div>
                            <p className={s('vantage_content', 'mt-3')}>
                                BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự
                                tin trước sự thay đổi của công nghệ và môi trường làm việc.
                            </p>
                        </div>
                        <div className={s('col-sm-4', 'pe-5')}>
                            <div className={s('wap_icon', 'd-flex', 'align-items-center')}>
                                <FontAwesomeIcon icon={faFire} className={s('pe-3', 'icon_check')} />
                                <h3 className={s('fw-bolder', 'vantage_title_chil', 'mb-0')}>
                                    Mài giũa bạn qua thực tế
                                </h3>
                            </div>
                            <p className={s('vantage_content', 'mt-3')}>
                                Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty
                                lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.
                            </p>
                        </div>
                    </div>
                    <div className={s('row', 'set_height_two')}>
                        <div className={s('col-sm-4', 'pe-5')}>
                            <div className={s('wap_icon', 'd-flex', 'align-items-center')}>
                                <FontAwesomeIcon icon={faUsers} className={s('pe-3', 'icon_check')} />
                                <h3 className={s('fw-bolder', 'vantage_title_chil', 'mb-0')}>Mentor tận tâm</h3>
                            </div>
                            <p className={s('vantage_content', 'mt-3')}>
                                Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên
                                trong quy trình Scrum, Agile. Được Mentor hỗ trợ tận tâm, nhiệt tình.
                            </p>
                        </div>
                        <div className={s('col-sm-4', 'pe-5')}>
                            <div className={s('wap_icon', 'd-flex', 'align-items-center')}>
                                <FontAwesomeIcon icon={faQrcode} className={s('pe-3', 'icon_check')} />
                                <h3 className={s('fw-bolder', 'vantage_title_chil', 'mb-0')}>Công nghệ mới, thực tế</h3>
                            </div>
                            <p className={s('vantage_content', 'mt-3')}>
                                Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu
                                cầu tuyển dụng thực tế từ doanh nghiệp.
                            </p>
                        </div>
                        <div className={s('col-sm-4', 'pe-5')}>
                            <div className={s('wap_icon', 'd-flex', 'align-items-center')}>
                                <FontAwesomeIcon icon={faTrophy} className={s('pe-3', 'icon_check')} />
                                <h3 className={s('fw-bolder', 'vantage_title_chil', 'mb-0')}>
                                    Trao tay chìa khóa thành công
                                </h3>
                            </div>
                            <p className={s('vantage_content', 'mt-3')}>
                                Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng doanh nghiệp ngay sau khi
                                tốt nghiệp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trái ngành - Đã biết lập trình */}

            <div className={s('container-fluid', 'select', 'p-0')}>
                <div className={s('row')}>
                    <div className={s('col-sm-6', 'p-0')}>
                        <div className={s('baner3')}>
                            <div className={s('dichuyen')}>
                                <h2 className={s('upcase_h2')}>Trái ngành</h2>
                                <p>From Zero to Hero</p>
                            </div>
                        </div>
                    </div>
                    <div className={s('col-sm-6', 'p-0')}>
                        <div className={s('baner4')}>
                            <div className={s('dichuyen')}>
                                <h2 className={s('upcase_h2')}>Đã biết lập trình</h2>
                                <p>Đã có kiến thức tư duy lập trình và OOP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Khóa học tiêu biểu  */}
            <div className={s('wrapper')}>
                <div className={s('d-flex', 'justify-content-center')}>
                    <h1 className={s('fw-bolder', 'tiltle_khoahoc')}>Khóa học tiêu biểu</h1>
                </div>
                <div className={s('container', 'd-flex', 'justify-content-between', 'hiden')}>
                    <div
                        className={s(
                            'item_count',
                            'me-1',
                            'p-4',
                            'col-md-12',
                            'col-md-12',
                            'col-xs-10',
                            'ps-0',
                            'pe-0',
                            'pb-5',
                        )}
                    >
                        <Slider {...settings}>
                            {/* Item1 */}
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            {/* Khóa học cấp tốc  */}
            <div className={s('wrapper_two')}>
                <div className={s('d-flex', 'justify-content-center')}>
                    <h1 className={s('fw-bolder', 'tiltle_khoahoc')}>Khóa học Cấp tốc </h1>
                </div>
                <div className={s('container', 'd-flex', 'justify-content-between', 'hiden', 'pb-5')}>
                    <div
                        className={s(
                            'item_count',
                            'me-1',
                            'p-4',
                            'col-md-12',
                            'col-md-12',
                            'col-xs-10',
                            'ps-0',
                            'pe-0',
                        )}
                    >
                        <Slider {...settings}>
                            {/* Item1 */}
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'col-xs-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ---- */}
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ---- */}
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3')}>
                                <div className={s('col-md-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s('col-md-3', 'col-xs-12', 'p-3', 'mb-5')}>
                                <div className={s('col-md-12', 'border', 'shadow')}>
                                    <img
                                        className={s('cart-img-top', 'rounded-top', 'col-md-12', 'col-xs-12')}
                                        src={anh}
                                        alt=".NET"
                                    />
                                    <div className={s('cart-body', 'ps-3', 'pe-3', 'cart-body_cusor')}>
                                        <h4
                                            className={s(
                                                'align-self-center',
                                                'cart_title',
                                                ' mt-5',
                                                'fw-bolder',
                                                'title_h4',
                                                'fs-1',
                                            )}
                                        >
                                            .NET Core API
                                        </h4>
                                        <img className={s('mt-3')} src={level} alt="" />
                                        <a href="#" className={s('name_GV', 'text-decoration-none', 'd-flex')}>
                                            <p className={s('ms-1', 'fw-semibold', 'mentor')}>Mentor </p>
                                            <p className={s('ms-2', 'fw-semibold', 'name_GV')}>Trần Hữu Hiệp</p>
                                        </a>
                                        <div className={s('d-flex')}>
                                            <FontAwesomeIcon icon={faUser} className={s('mt-1')} />
                                            <p className={s('fw-bolder', 'ms-2', 'fst-italic')}>104 Học Viên</p>
                                        </div>
                                        <div className={s('detail', 'fw-semibold')}>
                                            .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng
                                            dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển
                                            ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên
                                            nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng
                                            .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng
                                            và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.
                                        </div>

                                        <div className={s('rated', 'mt-2')}>
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                            <FontAwesomeIcon icon={faStar} className={s('rated_i')} />
                                        </div>

                                        <div className={s('wrap_price', 'd-flex ', 'mt-2')}>
                                            <p className={s('price', 'fw-bold', 'mb-0 ')}>3,000,000 VND</p>
                                            <FontAwesomeIcon icon={faCalendarDay} className={s('mt-1', 'ms-3')} />
                                            <p className={s('fw-bolder', 'mb-0', 'ms-2')}>25 Buổi Học</p>
                                        </div>
                                        <div className={s('border-bottom', 'border-grey', 'mb-3', 'mt-2')}></div>
                                        <div
                                            className={s('p-3', 'mb-5', ' rounded', 'button-ct', 'text-uppercase')}
                                            type="button"
                                        >
                                            Xem chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            {/* Mentor tiêu biểu  */}

            <div className={s('wrapper_two')}>
                <div className={s('d-flex', 'justify-content-center')}>
                    <h1 className={s('fw-bolder', 'tiltle_khoahoc')}>Mentor tiêu biểu </h1>
                </div>
                <div className={s('container', 'd-flex', 'justify-content-between', 'hiden', 'pb-5')}>
                    <div
                        className={s(
                            'item_count',
                            'me-1',
                            'p-4',
                            'col-md-12',
                            'col-md-12',
                            'col-xs-10',
                            'ps-0',
                            'pe-0',
                        )}
                    >
                        <Slider {...settings}>
                            <div className={s('p-3')}>
                                <div className={s('card')}>
                                    <img className={s('card-img-top')} src={anh} alt="Card image" />
                                    <div className={s('card-body')}>
                                        <h4 className={s('card_namell')}>Team STEM Mentor</h4>
                                        <p className={s('card-text', 'center_text')}>
                                            Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ
                                            thuật và toán học). Chúng tôi đã có kinh nghiệm trong giảng dạy STEM trong
                                            nhiều năm và yêu thích công việc của mình. Chúng tôi rất hân hạnh được làm
                                            việc trong lĩnh vực này và hy vọng sẽ mang lại cho các em học viên những
                                            kiến thức và kỹ năng hữu ích và dẫn đến thành công trong tương lai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={s('p-3')}>
                                <div className={s('card')}>
                                    <img className={s('card-img-top')} src={anh} alt="Card image" />
                                    <div className={s('card-body')}>
                                        <h4 className={s('card_namell')}>Phan Nhật Tân</h4>
                                        <p className={s('card-text', 'center_text')}>
                                            Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ
                                            thuật và toán học). Chúng tôi đã có kinh nghiệm trong giảng dạy STEM trong
                                            nhiều năm và yêu thích công việc của mình. Chúng tôi rất hân hạnh được làm
                                            việc trong lĩnh vực này và hy vọng sẽ mang lại cho các em học viên những
                                            kiến thức và kỹ năng hữu ích và dẫn đến thành công trong tương lai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={s('p-3')}>
                                <div className={s('card')}>
                                    <img className={s('card-img-top')} src={anh} alt="Card image" />
                                    <div className={s('card-body')}>
                                        <h4 className={s('card_namell')}>Team STEM Mentor</h4>
                                        <p className={s('card-text', 'center_text')}>
                                            Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ
                                            thuật và toán học). Chúng tôi đã có kinh nghiệm trong giảng dạy STEM trong
                                            nhiều năm và yêu thích công việc của mình. Chúng tôi rất hân hạnh được làm
                                            việc trong lĩnh vực này và hy vọng sẽ mang lại cho các em học viên những
                                            kiến thức và kỹ năng hữu ích và dẫn đến thành công trong tương lai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={s('p-3')}>
                                <div className={s('card')}>
                                    <img className={s('card-img-top')} src={anh} alt="Card image" />
                                    <div className={s('card-body')}>
                                        <h4 className={s('card_namell')}>Phan Nhật Tân</h4>
                                        <p className={s('card-text', 'center_text')}>
                                            Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ
                                            thuật và toán học). Chúng tôi đã có kinh nghiệm trong giảng dạy STEM trong
                                            nhiều năm và yêu thích công việc của mình. Chúng tôi rất hân hạnh được làm
                                            việc trong lĩnh vực này và hy vọng sẽ mang lại cho các em học viên những
                                            kiến thức và kỹ năng hữu ích và dẫn đến thành công trong tương lai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={s('p-3')}>
                                <div className={s('card')}>
                                    <img className={s('card-img-top')} src={anh} alt="Card image" />
                                    <div className={s('card-body')}>
                                        <h4 className={s('card_namell')}>Team STEM Mentor</h4>
                                        <p className={s('card-text', 'center_text')}>
                                            Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ
                                            thuật và toán học). Chúng tôi đã có kinh nghiệm trong giảng dạy STEM trong
                                            nhiều năm và yêu thích công việc của mình. Chúng tôi rất hân hạnh được làm
                                            việc trong lĩnh vực này và hy vọng sẽ mang lại cho các em học viên những
                                            kiến thức và kỹ năng hữu ích và dẫn đến thành công trong tương lai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={s('p-3')}>
                                <div className={s('card')}>
                                    <img className={s('card-img-top')} src={anh} alt="Card image" />
                                    <div className={s('card-body')}>
                                        <h4 className={s('card_namell')}>Phan Nhật Tân</h4>
                                        <p className={s('card-text', 'center_text')}>
                                            Xin chào mọi người, chúng tôi là giáo viên dạy STEM (khoa học, công nghệ, kỹ
                                            thuật và toán học). Chúng tôi đã có kinh nghiệm trong giảng dạy STEM trong
                                            nhiều năm và yêu thích công việc của mình. Chúng tôi rất hân hạnh được làm
                                            việc trong lĩnh vực này và hy vọng sẽ mang lại cho các em học viên những
                                            kiến thức và kỹ năng hữu ích và dẫn đến thành công trong tương lai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            {/* Banerrrr */}

            <div className={s('advantages', 'container-fluid')}>
                <div className={s('container')}>
                    <div className={s('advantages-content')}>
                        <h4 className={s('text-center', 'title_dinhuong', 'fw-bolder')}>
                            Định hướng và Chuẩn hoá lộ trình học tập
                        </h4>
                        <h2 className={s('text-center', 'fw-bolder', 'title_dinhuong1')}>
                            Học Thật, Dự Án Thật, Mentor Tận Tâm
                        </h2>
                        <div className={s('d-flex', 'justify-content-center', 'flex-wrap')}>
                            <button className={s('button_dh', 'col-xs-12')}>Tư vấn lộ trình</button>
                            <button className={s('button_dh', 'col-xs-12')}>Danh sách khóa học</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer  */}
            <div className={s('container-fluid')}>
                <div className={s('footer_wrap')}>
                    <div className={s('container')}>
                        <div className={s('row', 'd-flex', 'justify-content-between')}>
                            <div className={s('col-sm-5', 'col-xs-12', 'col-lg-3', 'mt-5', 'p-0', 'v')}>
                                <div className={s('mb-5')}></div>
                                {/* <img className="mb-5 " src="img/sv_logo_dashboard.png" alt="" /> */}
                                <p className={s('text-white', 'mb-5', 'text-wrap')}>
                                    Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ năng lập trình
                                    của bạn. Tất cả các mentor của chúng tôi đều có nhiều kinh nghiệm trong thực tế và
                                    giảng dạy.
                                </p>
                                <h5 className={s('text-white', 'mb-2')}>Theo dõi chúng tôi tại:</h5>
                                <div className={s('wrap_icon', 'mb-5')}>
                                    <a className={s('me-2')} href="#">
                                        {/* <i className="fa-brands fa-facebook" style="color: #eff0f0;"></i> */}
                                    </a>
                                    <a className={s('me-2')} href="#">
                                        {/* <i className="fa-brands fa-square-instagram" style="color: #fcfcfd;"></i> */}
                                    </a>
                                    <a className={s('me-2')} href="#">
                                        {/* <i className="fa-brands fa-youtube" style="color: #fcfcfc;"></i> */}
                                    </a>
                                </div>
                            </div>
                            <div className={s('col-sm-2', 'col-xs-5', 'col-lg-2', 'mt-5', 'p-0', 'ps-3')}>
                                <h5 className={s('title_h5')}>Menu</h5>
                                <ul className={s('ps-0', 'mt-3', 'fw-normal')}>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Trang chủ</li>
                                    </a>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Về chúng tôi</li>
                                    </a>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Nền tảng LMS</li>
                                    </a>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Khóa học STEM</li>
                                    </a>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Khóa học</li>
                                    </a>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Mentor</li>
                                    </a>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Blog</li>
                                    </a>
                                </ul>
                            </div>
                            <div className={s('col-sm-2', 'col-xs-2', 'mt-5', 'col-lg-2', 'ms-0', 'p-0', 'ps-3')}>
                                <h5 className={s('title_h5')}>Điều khoản</h5>
                                <ul className={s('ps-0', 'mt-3', 'fw-normal')}>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Chính sách bảo mật</li>
                                    </a>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Điều khoản dịch vụ</li>
                                    </a>
                                </ul>
                                <h5 className={s('title_h5', 'mt-5')}>Cộng tác viên</h5>
                                <ul className={s('ps-0', 'mt-3', 'fw-normal')}>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Đăng ký Cộng tác viên</li>
                                    </a>
                                    <a className={s('text-decoration-none', 'text-white')} href="#">
                                        <li className={s('mt-2')}>Đăng ký Mentor</li>
                                    </a>
                                </ul>
                            </div>
                            <div className={s('col-sm-4', 'col-xs-3', 'mt-5', 'col-lg-4', 'p-0', 'ps-3')}>
                                <h5 className={s('title_h5')}>Liên hệ với chúng tôi</h5>
                                <div className={s('text-white', 'd-flex')}>
                                    {/* <i className="icon_info fa-solid fa-location-dot mt-1"></i> */}
                                    <p className={s('fw-normal', 'ms-2')}>Tân Phú, TP.HCM</p>
                                </div>
                                <div className={s('text-white', 'd-flex')}>
                                    <i className="icon_info fa-solid fa-envelope mt-2"></i>
                                    <p className="fw-normal ms-2">nguyenduchuu2k2@gmail.com</p>
                                </div>
                                <div className={s('text-white', 'd-flex')}>
                                    <i className="icon_info fa-solid fa-phone-volume mt-1 "></i>
                                    <p className="fw-normal ms-2">09999........</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
