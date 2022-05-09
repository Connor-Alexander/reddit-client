import React from "react";
import styles from './Card.module.css'

function Card(props) {


    return (
        <div className={styles.cardPlaceholder}>
            <div className={styles.cardTitleContainer}>{props.title}</div>
            {/* <h2 className={styles.cardTitle}>{props.title}</h2> */}
            {/* <img className={styles.cardThumbnail} src={props.thumbnail} /> */}
            <div className={styles.cardThumbnailContainer}>Thumbnail</div>
            <div className={styles.cardFooterContainer}>Footer</div>
            <div className={styles.cardSideContainer}>Side</div>
        </div>
    );
}

export default Card;