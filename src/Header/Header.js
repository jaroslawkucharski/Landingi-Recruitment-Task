import React, { useContext } from 'react';
import {
    HashRouter as Router,
    Link
} from "react-router-dom";

import styles from "./Header.css";
import { AppContext } from "./../AppContext/AppContext";

const Header = () => {
    const { favourite } = useContext(AppContext);

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
                    <Link to="/favourite">
                        <p className={styles.heart}>
                            <ion-icon name="heart" />
                            {favourite.length > 0
                                ? <span className={styles.notification}>{favourite.length}</span>
                                : null
                            }
                        </p>
                    </Link>
                </Router>
            </div>
        </header>
    );
}

export default Header;
