import styles from "./Votes.module.css";
import { thousandsHelper } from "../../../utils/utils";

function UpVote(props) {
  const ups = props.ups || "N/A";

  return (
    <button className={[styles.vote, styles.upVote].join(" ")}>{ups}</button>
  );
}

function DownVote({ downs, upvoteRatio, ups }) {
  const totalVotes = ups / upvoteRatio;
  const negativeVotes = thousandsHelper(Math.ceil(totalVotes - ups));
  return (
    <button className={[styles.vote, styles.downVote].join(" ")}>
      {negativeVotes}
    </button>
  );
}

export { UpVote, DownVote };
