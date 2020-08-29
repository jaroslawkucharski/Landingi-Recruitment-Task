import React, { useState, useEffect } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import styles from "./Main.css";

import Posts from "./Posts/Posts";
import Post from "./Post/Post";

const URL_API = `https://jsonplaceholder.typicode.com/`;

const Main = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [favorite, setFavorite] = useState([]);

    const postLimit = 12;

    useEffect(() => {
        fetch(URL_API + `posts?_start=0&_limit=${postLimit}`)
            .then(res => res.json())
            .then(data => setPosts(data))

        fetch(URL_API + `comments`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => (<Posts posts={posts} />)} />
                        <Route exact path="/:post" component={() => (<Post posts={posts} comments={comments} setFavorite={setFavorite} />)} />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </Router>
            </div>
        </main>
    );
}

export default Main;
