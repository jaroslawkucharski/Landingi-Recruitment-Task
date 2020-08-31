import React, { useState, useEffect } from "react";
import axios from 'axios';

export const AppContext = React.createContext();

const URL_API = `https://jsonplaceholder.typicode.com/`;
const LIMIT = 12;

const AppContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [allPages, setAllPages] = useState();
    const [comments, setComments] = useState([]);
    const [favourite, setFavourite] = useState([]);
    const pagination = [];

    for (let i = 0; i < allPages; i++)
        pagination.push(i);

    useEffect(() => {
        axios.all([
            axios.get(URL_API + `posts`),
            axios.get(URL_API + `posts?_page=${page}&_limit=${LIMIT}`),
            axios.get(URL_API + `comments`)
        ])
            .then(res => {
                setAllPages(Math.ceil(res[0].data.length / LIMIT));
                setPosts(res[1].data);
                setComments(res[2].data);
            });
    }, [page]);

    const onPage = e => {
        setPage(e.target.innerText);
    }


    return (
        <AppContext.Provider value={{ posts, page, setPage, allPages, comments, setComments, favourite, setFavourite, pagination, onPage, URL_API }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
