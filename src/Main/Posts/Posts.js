import React, { useContext } from 'react';
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

import styles from "./Posts.css";
import { AppContext } from "./../../AppContext/AppContext";
import Pagination from "./Pagination/Pagination";

const Posts = () => {
    const { posts } = useContext(AppContext);

    return (
        <>
            {posts.length > 0
                ? <ul className={styles.posts}>
                    {posts?.map(e => (
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
                : <div className={styles.spinner}>
                    <p className={styles.loading}>loading data</p>
                    <img src="./../../assets/spinners.gif" alt="Loading spinner" />
                </div>
            }
            <Pagination />
        </>
    );
}

export default Posts;
