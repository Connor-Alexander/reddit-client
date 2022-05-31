import styles from './Comment.module.css';
import { UpVote, DownVote } from '../Buttons/Votes/Votes.js';

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
                <UpVote />
                <DownVote />
            </div>
            <p>
            Apples and pickles and doughnuts and alabamas and apricots like to throw spears and I wish I could throw a spear.
            </p>
        </div>
    );
}

export default Comment;