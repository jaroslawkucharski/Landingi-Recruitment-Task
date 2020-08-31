import React, { useContext } from 'react';
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

import styles from "./Favourite.css";
import { AppContext } from "../../AppContext/AppContext";

const Favorite = () => {
    const { favourite, setFavourite } = useContext(AppContext);

    const onDelete = e => {
        const deletePost = e.target.id;
        const newFavourite = favourite.filter(fav => fav.id != deletePost);
        setFavourite(newFavourite);
    }

    return (
        <>
            {favourite.length > 0
                ? <ul className={styles.posts}>
                    {favourite.map(e => (
                        <li className={styles.post} key={e.id}>
                            <Router>
                                <Link to={"/post/" + e.id}>
                                    <h2 className={styles.postTitle}>{e.title}</h2>
                                </Link>
                                <p className={styles.postBody}>{e.body}</p>
                                <Link to={"/post/" + e.id}>
                                    <p className={styles.postMore}>/ read more / </p>
                                </Link>
                                <p className={styles.postDelete} onClick={onDelete} id={e.id}><ion-icon name="trash-outline" /> remove from favorites</p>
                            </Router>
                        </li>
                    ))}
                </ul>
                : <h2 className={styles.noArticles}>You haven't favorite articles</h2>}
        </>
    );
}

export default Favorite;
