import styles from './Post.module.css';
import { Link } from 'react-router-dom';
import { UpVote, DownVote } from '../Buttons/Votes/Votes';

function Post() {
    return (
        <div className={styles.post}>
            <div className={styles.topBar}>
                <h2>Post headline</h2>
                <div className={styles.categoryContainer}>
                    <h3>r/category</h3>
                </div>
            </div>
            <div className={styles.topBarBreak}></div>
            <div className={styles.image}>
                <img src="https://jooinn.com/images/loading-5.png" />
            </div>
            <div className={styles.bottomBar}>
                <div className={styles.credentialsContainer}>
                    <p className={styles.authorName}>Author</p>
                    <p className={styles.dateCreated}>Created</p>
                </div>
                <Link to="/comments"><button className={styles.commentsButton}>14.7k</button></Link>
                <div className={styles.votingContainer}>
                    {/* Re-position button components */}
                    <DownVote />
                    <UpVote />
                </div>
            </div>
        </div>
    );
}

export default Post; 