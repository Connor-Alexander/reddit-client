// Mock data
// import mock from '../../mock/mockData';

// With the intent to re-factor into React-Bootstrap components later.

import styles from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Import component(s)
import Post from "../Post/Post";
import Spinner from "react-bootstrap/esm/Spinner";

function Dashboard() {
  const posts = useSelector((state) => state.dashboard.searchResults);
  const isLoading = useSelector((state) => state.dashboard.isLoading);

  return (
    <div className={styles.dashContainer}>
      {isLoading ? (
        <Spinner
          animation="border"
          style={{ position: "relative", marginBottom: "20px" }}
        />
      ) : (
        <div className={styles.dash}>
          {posts &&
            posts.map((v, i) => <Post classname="post" data={v} key={i + 1} />)}
        </div>
      )}
      <Outlet />
      <button className={styles.moreButton}>More 🔃</button>
    </div>
  );
}

export default Dashboard;
