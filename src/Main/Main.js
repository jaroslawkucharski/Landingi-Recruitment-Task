import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import styles from "./Main.css";

import Posts from "./Posts/Posts";
import Post from "./Post/Post";
import Favorite from "./Favorite/Favorite";
import NotFound from "./NotFound/NotFound";

const Main = ({ posts, comments, setComments, favorite, sortFavorite, setFavorite, URL_API, page, setPage, allPages }) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => (<Posts posts={posts} page={page} setPage={setPage} allPages={allPages} />)} />
                        <Route path="/favorite" component={() => (<Favorite sortFavorite={sortFavorite} />)} />
                        <Route path="/post/:post" component={() => (<Post posts={posts} comments={comments} setComments={setComments} favorite={favorite} setFavorite={setFavorite} URL_API={URL_API} />)} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        </main>
    );
}

export default Main;
