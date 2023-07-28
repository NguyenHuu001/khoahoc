import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// IMG
import baner from '~/assets/imgs/banner.jpg';
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const s = classNames.bind(styles);
function Home() {
    return (
        <div className={s('wrap')}>
            <div className={s('baner')} style={{ backgroundImage: `url(${baner})` }}>
                <div className={s('baner_content')}>
                    <h4 className="content_one">Khởi đầu sự nghiệp của bạn</h4>
                    <h2 className="content_two">Trở thành lập trình viên chuyên nghiệp tại BSMART</h2>
                    <p className="content_three">
                        Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART sẽ
                        giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành lập
                        trình viên chuyên nghiệp
                    </p>
                    <button>Xem khóa học</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
