import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// IMG
import baner from '~/assets/imgs/banner.jpg'
// ICONN
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const s = classNames.bind(styles);
function Home() {
    return ( 
        <div className={s('wrap')}>
            <div className={s('baner')} style={{backgroundImage: `url(${baner})` }}>
                <div className={s('baner_content')}>
                    <h4 className='content_one'>Khởi đầu sự nghiệp của bạn</h4>
                    <h2 className='content_two'></h2>
                </div>
            </div>
        </div>
     );
}

export default Home;