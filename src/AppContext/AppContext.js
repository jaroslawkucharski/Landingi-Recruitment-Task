import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

const URL_API = `https://jsonplaceholder.typicode.com/`;
const LIMIT = 12;

const AppContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [allPages, setAllPages] = useState();
    const [comments, setComments] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const sortFavorite = [...new Set(favorite)];

    useEffect(() => {
        fetch(URL_API + `posts`)
            .then(res => res.json())
            .then(data => setAllPages(Math.ceil(data.length / LIMIT)))

        fetch(URL_API + `posts?_page=${page}&_limit=${LIMIT}`)
            .then(res => res.json())
            .then(data => setPosts(data))

        fetch(URL_API + `comments`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [page]);

    return (
        <AppContext.Provider value={{ posts, page, setPage, allPages, comments, setComments, setFavorite, sortFavorite, URL_API }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
