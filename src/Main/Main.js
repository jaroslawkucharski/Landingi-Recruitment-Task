import React, { useState, useEffect } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import styles from "./Main.css";

import Posts from "./Posts/Posts";

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


                <Router>
                    <Switch>
                        <Route exact path="/" component={() => (<Posts posts={posts} />)} />
                        <Route exact path="/:postId" component={() => (<Post />)} />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </Router>



            </div>
        </main>
    );
}

export default Main;
