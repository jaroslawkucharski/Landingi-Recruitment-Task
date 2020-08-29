import React from 'react';

const Pagination = ({ posts, pageLimit }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(posts.length / pageLimit); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul>
            {pageNumbers.map(e => (
                <li>{e}</li>
            ))}
        </ul>
    );
}

export default Pagination;



