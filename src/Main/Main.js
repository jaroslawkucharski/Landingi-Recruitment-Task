import React, { useState, useEffect } from 'react';
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

import styles from "./Main.css";

const URL_API = `https://jsonplaceholder.typicode.com/`;

const Main = () => {
    const [posts, setPosts] = useState([]);

    const postLimit = 12;

    useEffect(() => {
        fetch(URL_API + `posts?_start=1&_limit=${postLimit}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);


    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <ul className={styles.posts}>
                    {posts?.map(e => (
                        <li className={styles.post} key={e.id}>
                            <Router>
                                <Link to={e.id}>
                                    <h2 className={styles.postTitle}>{e.title}</h2>
                                </Link>
                                <p className={styles.postBody}>{e.body}</p>
                                <Link>
                                    <p className={styles.postMore}>/ read more /</p>
                                </Link>
                            </Router>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Main;
