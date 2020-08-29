import React, { Component } from 'react';

import styles from "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.heading}>
                        <span className={styles.headingName}>Landingi</span><br />
                        recruitment<br />task_
                    </h1>
                    <p className={styles.heart}>
                        <ion-icon name="heart" />
                    </p>
                </div>
            </header>
        );
    }
}
