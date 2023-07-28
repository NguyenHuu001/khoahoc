import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// IMG
import baner from '~/assets/imgs/banner.jpg';
import background from '~/assets/imgs/background.jpg';
import baner2 from '~/assets/imgs/banner-2.jpg';
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const s = classNames.bind(styles);
function Home() {
    return (
        <div className={s('wrap_baner', 'p-0')}>
            <div
                className={s('baner', 'd-flex', 'justify-content-center')}
                style={{ backgroundImage: `url(${baner})` }}
            >
                <div className={s('baner_content', 'd-flex', 'flex-column', 'align-items-center', 'p-5')}>
                    <div className={s('wrap_content', 'd-flex', 'flex-column', 'align-items-center')}>
                        <h4 className={s('content_one', 'mb-5')}>Khởi đầu sự nghiệp của bạn</h4>
                        <h1 className={s('content_two', 'mb-5')}>Trở thành lập trình viên chuyên nghiệp tại BSMART</h1>
                        <p className={s('content_three', 'mb-5')}>
                            Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART
                            sẽ giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành
                            lập trình viên chuyên nghiệp
                        </p>
                    </div>
                    <div className={s('content_button', 'p-5')}>
                        <button className={s('fw-bolder')}>Xem khóa học</button>
                    </div>
                </div>
            </div>
            {/* Về chúng tôi */}

            <div className={s('container-fluid', 'wrap_baner', 'p-0')}>
                <div
                    className={s('baner_two', 'align-items-center', 'd-flex')}
                    style={{ background: `url(${background})` }}
                >
                    <div className={s('container')}>
                        <h1 className={s('text-center', 'mb-5', 'about_us')}>Về chúng tôi</h1>
                        <div className={s('row', 'content_two')}>
                            <div className={s('col-sm-6')}>
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
                            <div className={s('img_baner', 'col-sm-6', 'd-flex', 'align-items-center')}>
                                <div className={s('img_baner_two')} style={{ background: `url(${baner2})` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Điểm ưu việt  */}

            <div className={s('container-fluid', 'vantage_Point', 'p-0')}>
                
                    <div className={s('container')}>
                        <h1 className={s('text-center', 'mb-5', 'vantage_title', 'mt-5')}>Điểm ưu việt tại BSmart</h1>
                        <div className={s('row','set_height')}>
                            <div className={s('col-sm-4','pe-2')}>
                                <h3 className={s('fw-bolder','vantage_title_chil')}>Học theo lộ trình, có định hướng</h3>
                                <p className={s('vantage_content','mt-5')}>
                                    BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và
                                    niềm đam mê lập trình của bạn để có việc ngay sau khi học.
                                </p>
                            </div>
                            <div className={s('col-sm-4','pe-2')}>
                                <h3 className={s('fw-bolder','vantage_title_chil')}>Nền tảng cốt lõi trong lập trình</h3>
                                <p className={s('vantage_content','mt-5')}>
                                    BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự
                                    tin trước sự thay đổi của công nghệ và môi trường làm việc.
                                </p>
                            </div>
                            <div className={s('col-sm-4','pe-2')}>
                                <h3 className={s('fw-bolder','vantage_title_chil')}>Mài giũa bạn qua thực tế</h3>
                                <p className={s('vantage_content','mt-5')}>
                                    Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty
                                    lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.
                                </p>
                            </div>
                        </div>
                        <div className={s('row','set_height')}>
                            <div className={s('col-sm-4','pe-2')}>
                                <h3 className={s('fw-bolder','vantage_title_chil')}>Mentor tận tâm</h3>
                                <p className={s('vantage_content','mt-5')}>
                                    Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên
                                    trong quy trình Scrum, Agile. Được Mentor hỗ trợ tận tâm, nhiệt tình.
                                </p>
                            </div>
                            <div className={s('col-sm-4','pe-2')}>
                                <h3 className={s('fw-bolder','vantage_title_chil')}>Công nghệ mới, thực tế</h3>
                                <p className={s('vantage_content','mt-5')}>
                                    Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu
                                    cầu tuyển dụng thực tế từ doanh nghiệp.
                                </p>
                            </div>
                            <div className={s('col-sm-4','pe-2')}>
                                <h3 className={s('fw-bolder','vantage_title_chil')}>Trao tay chìa khóa thành công</h3>
                                <p className={s('vantage_content','mt-5')}>
                                    Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng doanh nghiệp ngay sau khi
                                    tốt nghiệp.
                                </p>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    );
}

export default Home;
