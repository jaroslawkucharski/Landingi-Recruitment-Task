import React from 'react';

import styles from "./Pagination.css";

const Pagination = ({ page, setPage, allPages }) => {
    const pagination = [];

    for (let i = 0; i < allPages; i++)
        pagination.push(i);

    const onPrev = () => {
        page != 0
            ? setPage(prev => prev - 1)
            : null
    }

    const onNext = () => {
        page != allPages
            ? setPage(prev => prev + 1)
            : null
    }

    const onPage = e => {
        setPage(Number(e.target.innerText))
    }

    return (
        <ul className={styles.pagination}>
            <li className={styles.navigation} onClick={onPrev}>prev</li>
            {pagination.map(e => <li key={e} className={styles.page} onClick={onPage}>{e + 1}</li>)}
            <li className={styles.navigation} onClick={onNext}>next</li>
        </ul>
    );
}

export default Pagination;
