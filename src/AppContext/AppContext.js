import React, { useState, useEffect } from "react";
import axios from 'axios';

export const AppContext = React.createContext();

const URL_API = `https://jsonplaceholder.typicode.com/`;
const PAGE_LIMIT = 12;

const AppContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [allPages, setAllPages] = useState();
    const [comments, setComments] = useState([]);
    const [favourite, setFavourite] = useState([]);
    const [addNewComment, setAddNewComment] = useState({
        postId: "",
        name: "",
        email: "",
        body: "",
    });
    const pagination = [];

    useEffect(() => {
        axios.all([
            axios.get(URL_API + `posts`),
            axios.get(URL_API + `posts?_page=${page}&_limit=${PAGE_LIMIT}`),
            axios.get(URL_API + `comments`)
        ])
            .then(res => {
                setAllPages(Math.ceil(res[0].data.length / PAGE_LIMIT));
                setPosts(res[1].data);
                setComments(res[2].data);
            });
    }, [page]);

    for (let i = 0; i < allPages; i++)
        pagination.push(i);

    const onPage = e => {
        setPage(e.target.innerText);
    }

    const addToFavorite = e => {
        const thisPost = e.target.id;
        if (favourite?.findIndex(e => e.id == thisPost) > -1) return;
        const favouritePost = posts?.find(e => e.id == thisPost)
        setFavourite(prev => [...prev, favouritePost])
    }

    const onDelete = e => {
        const deletePost = e.target.id;
        const newFavourite = favourite.filter(fav => fav.id != deletePost);
        setFavourite(newFavourite);
    }

    const addComment = e => {
        const postId = e.target.id
        e.preventDefault();
        const { name, email, body } = addNewComment;

        if (name.length < 3 || body.length < 5 || email.length < 3) {
            alert("Error\n\Fill out all the the required fields!");
        }
        else {
            axios.post(URL_API + `posts/${postId}/comments`, {
                postId: postId,
                name: addNewComment.name,
                email: addNewComment.email,
                body: addNewComment.body,
            })
                .then(res => setComments(prev => [...prev, res.data]));

            setAddNewComment({
                postId: "",
                name: "",
                email: "",
                body: "",
            });
        }
    }

    const handleInputValue = e => {
        const { name, value } = e.target;
        setAddNewComment(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <AppContext.Provider value={{ posts, setPage, allPages, onPage, pagination, comments, addComment, addNewComment, handleInputValue, favourite, addToFavorite, onDelete }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
