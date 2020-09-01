import React, { useContext, useEffect } from 'react';
import {
    HashRouter as Router,
    NavLink,
    useParams
} from "react-router-dom";

import styles from "./Pagination.css";
import { AppContext } from "./../../../AppContext/AppContext";

const Pagination = () => {
    const { allPages, setPage, pagination, onPage } = useContext(AppContext);
    const { pageId } = useParams();

    useEffect(() => {
        setPage(pageId);
    }, [pageId]);

    return (
        <Router>
            <ul className={styles.pagination}>
                <NavLink to="/page/1">
                    <li className={styles.navigation}>&laquo;</li>
                </NavLink>
                {pagination.map(e => (
                    e == 0
                        ? <NavLink exact to={"/"} key={e} className={styles.page} activeClassName={styles.pageActive}>
                            <li onClick={onPage} className={pageId == 1 ? styles.pageActive : null}>{e + 1}</li>
                        </NavLink>
                        : <NavLink to={"/page/" + (e + 1)} key={e} className={styles.page} activeClassName={styles.pageActive}>
                            <li onClick={onPage}>{e + 1}</li>
                        </NavLink>
                ))}
                <NavLink to={"/page/" + allPages}>
                    <li className={styles.navigation}>&raquo;</li>
                </NavLink>
            </ul>
        </Router>
    );
}

export default Pagination;
