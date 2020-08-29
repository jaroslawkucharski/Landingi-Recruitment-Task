import React, { Component } from 'react';
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

import styles from "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.container}>
                <Router>
                        <Link to={"/"}>
                        <h1 className={styles.heading}>
                        <span className={styles.headingName}>Landingi</span><br />
                        recruitment<br />task
                    </h1>
                        </Link>
                    </Router>
                    <p className={styles.heart}>
                        <ion-icon name="heart" />
                    </p>
                </div>
            </header>
        );
    }
}
