import React from "react";
import Card from "../Card/Card";
import styles from './Dashboard.module.css';
import { useDispatch, useSelector } from "react-redux";

// MOCK DATA
const mockDeck = [
    {title: 'Title 1', thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.wiPfG_LFRH_-6ptG7vpg8QHaHa?pid=ImgDet&rs=1'},
    {title: 'Title 2', thumbnail: 'https://i.ebayimg.com/images/i/232597941508-0-1/s-l1000.jpg'},
    {title: 'Title 3', thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.wiPfG_LFRH_-6ptG7vpg8QHaHa?pid=ImgDet&rs=1'},
    {title: 'Title 4', thumbnail: 'https://i.ebayimg.com/images/i/232597941508-0-1/s-l1000.jpg'},
    {title: 'Title 5', thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.wiPfG_LFRH_-6ptG7vpg8QHaHa?pid=ImgDet&rs=1'},
    {title: 'Title 6', thumbnail: 'https://i.ebayimg.com/images/i/232597941508-0-1/s-l1000.jpg'}
]

function Dashboard() {
    const deck = useSelector(state => state.refresh.deck);
    console.log('Current Deck', deck)

    return (
        <div className={styles.dashboard}>
            {/* change to deck.map to implement */}
            {deck.map(card => {
                return <Card title={card.title} thumbnail={card.thumbnail} />
            })}
        </div>
    );
}

export default Dashboard;