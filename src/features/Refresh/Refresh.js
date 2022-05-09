import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Refresh.module.css'
import { refreshAsync, selectDeck } from "./refreshSlice";

function Refresh() {
    const dispatch = useDispatch();

    return (
        <button className={styles.refreshButton} onClick={() => {
            dispatch(refreshAsync())
        }}>
            Refresh
        </button>
    );
}

export default Refresh;
