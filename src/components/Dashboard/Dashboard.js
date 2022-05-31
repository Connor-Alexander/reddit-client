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
                <Post className="post" />
                <Post className="post" />
                <Post className="post" />
                <Post className="post" />
                <Post className="post" />
                <Post className="post" />
            </div>
            <Outlet />
            <button className={styles.moreButton} >More 🔃</button>
        </div>
    );
}

export default Dashboard;