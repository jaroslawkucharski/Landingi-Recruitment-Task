import React, { useState, useEffect } from "react";

import Header from "./../Header/Header";
import Main from "./../Main/Main";
import Footer from "./../Footer/Footer";

const URL_API = `https://jsonplaceholder.typicode.com/`;
const LIMIT = 12;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const sortFavorite = [...new Set(favorite)];

    useEffect(() => {
        fetch(URL_API + `posts?_start=0&_limit=${postLimit}`)
            .then(res => res.json())
            .then(data => setPosts(data))

        fetch(URL_API + `comments`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);

    return (
        <>
            <Header sortFavorite={sortFavorite} />
            <Main posts={posts} comments={comments} setComments={setComments} sortFavorite={sortFavorite} setFavorite={setFavorite} URL_API={URL_API} />
            <Footer />
        </>
    )
}

export default App;
