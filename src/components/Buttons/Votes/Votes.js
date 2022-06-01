import styles from './Votes.module.css';

function UpVote() {
    return <button className={[styles.vote, styles.upVote].join(" ")}>207</button>;
}

function DownVote() {
    return <button className={[styles.vote, styles.downVote].join(" ")}>41</button>;
}

export { UpVote, DownVote };