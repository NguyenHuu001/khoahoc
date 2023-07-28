import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// IMG
import baner from '~/assets/imgs/banner.jpg';
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const s = classNames.bind(styles);
function Home() {
    return (
        <div className={s('wrap', 'container-fluid','container-lg')}>
            <div className={s('baner','d-flex','justify-content-center')} style={{ backgroundImage: `url(${baner})` }}>
                <div className={s('baner_content', 'd-flex', 'flex-column','align-items-center')}>
                    <div className={s('wrap_content', 'd-flex', 'flex-column', 'align-items-center')}>
                        <h4 className={s('content_one')}>Khởi đầu sự nghiệp của bạn</h4>
                        <h1 className={s('content_two')}>Trở thành lập trình viên chuyên nghiệp tại BSMART</h1>
                        <p className={s('content_three')}>
                            Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART
                            sẽ giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành
                            lập trình viên chuyên nghiệp
                        </p>
                    </div>
                    <div className={s('content_button')}>
                        <button>Xem khóa học</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
