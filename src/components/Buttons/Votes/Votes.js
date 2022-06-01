import styles from './Votes.module.css';

function UpVote(props) {
    const ups = props.ups || 'N/A';

    return <button className={[styles.vote, styles.upVote].join(" ")}>{ups}</button>;
}

function DownVote(props = 207) {
    const downs = props.downs || 'N/A';

    return <button className={[styles.vote, styles.downVote].join(" ")}>{downs}</button>;
}

export { UpVote, DownVote };