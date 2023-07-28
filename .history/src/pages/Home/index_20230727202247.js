
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

const s = classNames.bind(style);

function Home() {
    const carousel = 'slideShow'
    return (
        <div className={s('wrap_baner', 'p-0')}>
            <div className={s('wrap_header')}>
                <im
                    <div
                        className={s(
                            'content_header',
                            'd-flex',
                            'flex-column',
                            'align-items-center',
                            'mb-5',
                            'col-md-10',
                            'col-sm-10',
                        )}
                    >
                        <h1 className={s('fs-2', 'content_title', 'mb-5', 'mt-5')}>Khởi đầu sự nghiệp của bạn</h1>
                        <h1 className={s('content_title_two', 'mb-5', 'mt-3')}>
                            Trở thành lập trình viên chuyên nghiệp tại BSMART
                        </h1>
                        <span className={s('fs-3', 'content_content', 'mb-5', 'mt-5', 'col-md-9')}>
                            Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART
                            sẽ giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành
                            lập trình viên chuyên nghiệp
                        </span>
                        <div>
                            <button className={s('fs-3', 'content_button', 'mt-5')}>Xem khóa học</button>
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
                        'col-md-12',
                        'col-sm-12',
                        'col-xs-12',
                    )}
                >
                    <div className={s('container', 'col-md-12', 'col-sm-12', 'col-xs-12')}>
                        <h1 className={s('text-center', 'mb-5', 'about_us')}>Về chúng tôi</h1>
                        <div className={s('row', 'content_two', 'pb-5')}>
                            <div className={s('col-sm-12', 'col-md-6')}>
                                <p className={s('fst-normal')}>
                                    BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về đào tạo lập trình
                                    viên, kết nối Mentor và Mentee. Với đội ngũ Mentor giàu kinh nghiệm và chuyên môn,
                                    BSMART cam kết mang đến các khóa học lập trình chất lượng nhất. Hệ thống khóa học đa
                                    dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể lựa chọn các khóa
                                    học phù hợp với nhu cầu và khả năng của mình. BSMART cập nhật và áp dụng những công
                                    nghệ mới, giúp học viên và Mentor được tiếp cận với những kiến thức và kỹ năng mới
                                    nhất trong lập trình. Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên
                                    trong quá trình học tập và phát triển sự nghiệp sau khi tốt nghiệp.
                                </p>
                                <div className={s('d-flex', 'justify-content-center', 'mt-5')}>
                                    <button className={s('fw-bolder', 'content_two_btn')}>Xem khóa học</button>
                                    <button className={s('fw-bolder', 'content_two_btn')}>Hỗ trợ tư vấn</button>
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
                    <div className={s('row', 'set_height')}>
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
                    <div className={s('row', 'set_height')}>
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
                    <h1>Khóa học tiêu biểu</h1>
                </div>
                <div id={carousel} className={s('container', 'd-flex', 'justify-content-between', 'hiden')}>
                    {/* Item1 */}
                    <div className={s('item_count', 'col-md-3', 'me-1', 'p-4')}>
                        <div className={s('cart', 'border', 'shadow')}>
                            <img className={s('cart-img-top', 'rounded-top', 'col-md-12')} src={anh} alt=".NET" />
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
                                    .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng
                                    web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền
                                    tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows,
                                    macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên
                                    các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức
                                    tạp để chỉnh sửa mã nguồn.
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
                    {/* Item 2 */}
                    <div className={s('item_count', 'col-md-3', 'me-1', 'p-4')}>
                        <div className={s('cart', 'border', 'shadow')}>
                            <img className={s('cart-img-top', 'rounded-top', 'col-md-12')} src={anh} alt=".NET" />
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
                                    .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng
                                    web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền
                                    tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows,
                                    macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên
                                    các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức
                                    tạp để chỉnh sửa mã nguồn.
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
                    <div className={s('item_count', 'col-md-3', 'me-1', 'p-4')}>
                        <div className={s('cart', 'border', 'shadow')}>
                            <img className={s('cart-img-top', 'rounded-top', 'col-md-12')} src={anh} alt=".NET" />
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
                                    .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng
                                    web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền
                                    tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows,
                                    macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên
                                    các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức
                                    tạp để chỉnh sửa mã nguồn.
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
                    <div className={s('item_count', 'col-md-3', 'me-1', 'p-4')}>
                        <div className={s('cart', 'border', 'shadow')}>
                            <img className={s('cart-img-top', 'rounded-top', 'col-md-12')} src={anh} alt=".NET" />
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
                                    .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng
                                    web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền
                                    tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows,
                                    macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên
                                    các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức
                                    tạp để chỉnh sửa mã nguồn.
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
                    <div className={s('item_count', 'col-md-3', 'me-1', 'p-4')}>
                        <div className={s('cart', 'border', 'shadow')}>
                            <img className={s('cart-img-top', 'rounded-top', 'col-md-12')} src={anh} alt=".NET" />
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
                                    .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng
                                    web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền
                                    tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows,
                                    macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên
                                    các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức
                                    tạp để chỉnh sửa mã nguồn.
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
                    <div className={s('item_count', 'col-md-3', 'me-1', 'p-4')}>
                        <div className={s('cart', 'border', 'shadow')}>
                            <img className={s('cart-img-top', 'rounded-top', 'col-md-12')} src={anh} alt=".NET" />
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
                                    .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng
                                    web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền
                                    tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows,
                                    macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên
                                    các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức
                                    tạp để chỉnh sửa mã nguồn.
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
                    <div className={s('item_count', 'col-md-3', 'me-1', 'p-4')}>
                        <div className={s('cart', 'border', 'shadow')}>
                            <img className={s('cart-img-top', 'rounded-top', 'col-md-12')} src={anh} alt=".NET" />
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
                                    .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng
                                    web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền
                                    tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows,
                                    macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên
                                    các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức
                                    tạp để chỉnh sửa mã nguồn.
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
                    <div className={s('item_count', 'col-md-3', 'me-1', 'p-4')}>
                        <div className={s('cart', 'border', 'shadow')}>
                            <img className={s('cart-img-top', 'rounded-top', 'col-md-12')} src={anh} alt=".NET" />
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
                                    .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng
                                    web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền
                                    tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows,
                                    macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên
                                    các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức
                                    tạp để chỉnh sửa mã nguồn.
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
                </div>
            </div>
        </div>
    );
}

export default Home;
