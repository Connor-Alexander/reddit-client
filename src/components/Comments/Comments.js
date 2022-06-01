import styles from './Comments.module.css';
import { useNavigate } from 'react-router';
import Comment from '../Comment/Comment';

function Comments() {
    // console.log("Comments component rendered");
    let navigate = useNavigate();

    const handleExit = () => {
        navigate(-1);
    }

    return (
        <div className={styles.commentOverlay} onClick={handleExit}>
            <div className={styles.commentContainer}>
                <Comment depth={0} />
                {/* BUILD out indented child comment here */}
                {/* NOTE
                    [] depth props values are placeholder and to be calculated internally
                    on <Comment /> components based upon how deep they are in the 
                    comment tree.
                    [] would love a breakpoint at landscape orientation which
                    would effectively half the comment width OR place the original
                    post beside the comments in two columns, essentially! 
                    [] <Comment /> placeholders will be mapped with keys for reference
                    and passed their relevant Reddit JSON API retrieved props.
                */}
                <Comment depth={1} />
                <Comment depth={0} />
                <Comment depth={0} />
                <Comment depth={1} />
                <Comment depth={2} />
                <Comment depth={3} />
                <Comment depth={1} />
                <Comment depth={0} />
                <Comment depth={1} />
                <Comment depth={2} />
                <Comment depth={1} />
                <Comment depth={1} />
            </div>
        </div>
    );
}

export default Comments;