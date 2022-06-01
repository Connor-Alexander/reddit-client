// Mock data
import mock from '../../mock/mockData';

// With the intent to re-factor into React-Bootstrap components later.

import styles from './Dashboard.module.css';
import { Outlet } from 'react-router-dom';

// Import component(s)
import Post from '../Post/Post';

function Dashboard() {
    return (
        <div className={styles.dashContainer}>
            {/* <h2>Category 🎈</h2> */}
            {/* REMEMBER TO ADD KEYS WHEN MAPPING */}
            <div className={styles.dash} >
                <Post className="post" data={mock.posts[0]} />
                <Post className="post" data={mock.posts[1]} />
                <Post className="post" data={mock.posts[2]} />
                <Post className="post" data={mock.posts[3]} />
                <Post className="post" data={mock.posts[4]} />
                <Post className="post" data={mock.posts[5]} />
            </div>
            <Outlet />
            <button className={styles.moreButton} >More 🔃</button>
        </div>
    );
}

export default Dashboard;