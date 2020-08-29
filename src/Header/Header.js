import React, { Component } from 'react';
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

import styles from "./Header.css";

const Header = ({ sortFavorite }) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Router>
                    <Link to="/">
                        <h1 className={styles.heading}>
                            <span className={styles.headingName}>Landingi</span><br />
                        recruitment<br />task
                    </h1>
                    </Link>
                    <Link to="/favorite">
                        <p className={styles.heart}>
                            <ion-icon name="heart" />
                            <span className={styles.notification}>
                                {sortFavorite.length > 0
                                    ? sortFavorite.length
                                    : null}
                            </span>
                        </p>
                    </Link>
                </Router>
            </div>
        </header>
    );
}

export default Header;
