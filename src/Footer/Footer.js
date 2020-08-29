import React, { Component } from 'react';

import styles from "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <p className={styles.card}>
                    &copy; 2o2o Jarosław Kucharski
                    </p>
            </footer>
        );
    }
}
