import styles from './Comments.module.css';
import { useNavigate } from 'react-router';
import Comment from '../Comment/Comment';
import mock from '../../mock/mockData';

function Comments() {
    // console.log("Comments component rendered");
    let navigate = useNavigate();

    const handleExit = () => {
        navigate(-1);
    }

    return (
        <div className={styles.commentOverlay} onClick={handleExit}>
            <div className={styles.commentContainer}>
                <Comment data={mock.comments[0]} depth={0} />
                <Comment data={mock.comments[1]} depth={1} />
                <Comment data={mock.comments[2]} depth={1} />
                <Comment data={mock.comments[1]} depth={2} />
                <Comment data={mock.comments[2]} depth={0} />
                <Comment data={mock.comments[1]} depth={0} />
                <Comment data={mock.comments[2]} depth={1} />
                <Comment data={mock.comments[1]} depth={2} />
                <Comment data={mock.comments[0]} depth={3} />
                <Comment data={mock.comments[1]} depth={3} />
                <Comment data={mock.comments[2]} depth={4} />
                <Comment data={mock.comments[2]} depth={2} />
                <Comment data={mock.comments[1]} depth={1} />
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
            </div>
        </div>
    );
}

export default Comments;