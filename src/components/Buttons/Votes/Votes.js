import styles from './Votes.module.css';

function UpVote() {
    return <button className={[styles.vote, styles.upVote].join(" ")}></button>;
}

function DownVote() {
    return <button className={[styles.vote, styles.downVote].join(" ")}></button>;
}

export { UpVote, DownVote };