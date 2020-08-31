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

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Posts} />
                        <Route path="/page/:pageId" component={Posts} />
                        <Route path="/favorite" component={Favorite} />
                        <Route path="/post/:post" component={Post} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        </main>
    );
}

export default Main;
