import React from 'react';
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

import styles from "./Favorite.css";

const Favorite = ({ sortFavorite }) => {


    return (
        <>
            {sortFavorite.length > 0
                ? <ul className={styles.posts}>
                    {sortFavorite.map(e => (
                        <li className={styles.post} key={e.id}>
                            <Router>
                                <Link to={"/post/" + e.id}>
                                    <h2 className={styles.postTitle}>{e.title}</h2>
                                </Link>
                                <p className={styles.postBody}>{e.body}</p>
                                <Link to={"/post/" + e.id}>
                                    <p className={styles.postMore}>/ read more /</p>
                                </Link>
                            </Router>
                        </li>
                    ))}
                </ul>
                : <h2 className={styles.noArticles}>You haven't favorite articles</h2>}
        </>
    );
}

export default Favorite;
