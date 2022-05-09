import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Refresh.module.css'
import { refreshAsync } from "./refreshSlice";

let initialRefresh = false;

function Refresh() {
    const dispatch = useDispatch();
    const deck = useSelector(state => state.refresh.deck);

    if (!initialRefresh) {
        dispatch(refreshAsync())
        initialRefresh = true;
    }

    return (
        <button className={styles.refreshButton} onClick={() => {
            dispatch(refreshAsync())
        }}>
            Refresh
        </button>
    );
}

export default Refresh;
