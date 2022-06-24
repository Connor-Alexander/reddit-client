import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import { UpVote, DownVote } from "../Buttons/Votes/Votes";
import { timeSince, thousandsHelper } from "../../utils/utils";
import defaultImage from "../../images/no_thumbnail.jpg";

function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.topBar}>
        <h2>{props.data.data.title}</h2>
        <div className={styles.categoryContainer}>
          <h3>{props.data.data.subreddit}</h3>
        </div>
      </div>
      <div className={styles.topBarBreak}></div>
      <div className={styles.image}>
        <img
          src={
            props.data.data.thumbnail === "default" ||
            props.data.data.thumbnail === "self"
              ? defaultImage
              : props.data.data.thumbnail
          }
        />
      </div>
      `
      <div className={styles.bottomBar}>
        <div className={styles.credentialsContainer}>
          <p className={styles.authorName}>{props.data.author}</p>
          <p className={styles.dateCreated}>
            {timeSince(props.data.data.created)}
          </p>
        </div>
        <Link to="/comments">
          <button className={styles.commentsButton}>
            {thousandsHelper(props.data.num_comments)}
          </button>
        </Link>
        <div className={styles.votingContainer}>
          <UpVote ups={thousandsHelper(props.data.data.ups)} />
          <DownVote downs={thousandsHelper(props.data.data.downs)} />
        </div>
      </div>
    </div>
  );
}

export default Post;
