import styles from './Comment.module.css';
import { UpVote, DownVote } from '../Buttons/Votes/Votes.js';
import { timeSince, thousandsHelper } from '../../utils/utils';

function Comment(props) {
    // Hard-coded values for reference
    // const top = 0;
    // const indent = 1;

    // Eventual value for conditions
    const depth = props.depth;
    
    // Eventual condition loop (uncomment below)
    // const hasParent = true;
    /* 
    while (hasParent) {
        parent = jsonObject.parentThingo;
        parent && depth +=1;
        !parent && hasParent = false;
    } 
    */

   // Eventual calculated style form conditions
    const style = { width: `calc(100% - (10px * ${depth}))` };

    return (
        <div className={styles.comment} style={style}>
            <div className={styles.buttonContainer}>
                <UpVote ups={thousandsHelper(props.data.ups)} />    
                <DownVote downs={thousandsHelper(props.data.downs)} />
            </div>
            <div className={styles.contentContainer}>
                <p>{props.data.text}</p>
            <div className={styles.credentials}>
                <p className={styles.author}>{props.data.author}</p>
                <p className={styles.created}>{timeSince(props.data.created)}</p>
            </div>
            </div>
        </div>
    );
}

export default Comment;