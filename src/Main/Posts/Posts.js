import React from 'react';
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

import styles from "./Posts.css";

import Pagination from "./Pagination/Pagination";

const Posts = ({ posts, page, setPage, allPages }) => {
    return (
        <>
            <ul className={styles.posts}>
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
            <Pagination page={page} setPage={setPage} allPages={allPages} />
        </>
    );
}

export default Posts;
