import React from 'react';
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

import styles from "./Posts.css";

const Posts = ({ posts }) => {
    return (
        <ul className={styles.posts}>
            {posts?.map(e => (
                <li className={styles.post} key={e.id}>
                    <Router>
                        <Link to={"/" + e.id}>
                            <h2 className={styles.postTitle}>{e.title}</h2>
                        </Link>
                        <p className={styles.postBody}>{e.body}</p>
                        <Link to={"/" + e.id}>
                            <p className={styles.postMore}>/ read more /</p>
                        </Link>
                    </Router>
                </li>
            ))}
        </ul>
    );
}

export default Posts;
