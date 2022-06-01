import styles from './Post.module.css';
import { Link } from 'react-router-dom';
import { UpVote, DownVote } from '../Buttons/Votes/Votes';

function Post(props) {
    // Dev
    // console.log(props.data.headline)

    // eventual helper function to put in separate utils folder
    const timeSince = () => '10 mins ago';

    return (
        <div className={styles.post}>
            <div className={styles.topBar}>
                <h2>{props.data.headline}</h2>
                <div className={styles.categoryContainer}>
                    <h3>{props.data.subreddit}</h3>
                </div>
            </div>
            <div className={styles.topBarBreak}></div>
            <div className={styles.image}>
                <img src={props.data.thumbnail} />
            </div>
            <div className={styles.bottomBar}>
                <div className={styles.credentialsContainer}>
                    <p className={styles.authorName}>{props.data.author}</p>
                    <p className={styles.dateCreated}>{timeSince(props.data.created)}</p>
                </div>
                <Link to="/comments"><button className={styles.commentsButton}>{props.data.num_comments}</button></Link>
                <div className={styles.votingContainer}>
                    <UpVote ups={props.data.ups} />
                    <DownVote downs={props.data.downs} />
                </div>
            </div>
        </div>
    );
}

export default Post; 