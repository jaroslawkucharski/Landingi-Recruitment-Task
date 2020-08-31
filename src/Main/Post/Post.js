import React, { useState, useContext } from 'react';
import {
    useParams
} from "react-router-dom";
import axios from 'axios';

import styles from "./Post.css";
import { AppContext } from "./../../AppContext/AppContext";

const Post = () => {
    const { posts, comments, setComments, favourite, setFavourite, URL_API } = useContext(AppContext);
    const { postId } = useParams();
    const [addNewComment, setAddNewComment] = useState({
        postId: "",
        name: "",
        email: "",
        body: "",
    });

    const addToFavorite = () => {
        if (favourite?.findIndex(e => e.id == postId) > -1) return;
        const favouritePost = posts?.find(e => e.id == postId)
        setFavourite(prev => [...prev, favouritePost])
    }

    const addComment = e => {
        e.preventDefault();
        axios.post(URL_API + `posts/${postId}/comments`, {
            postId: postId,
            name: addNewComment.name,
            email: addNewComment.email,
            body: addNewComment.body,
        })
            .then(res => setComments(prev => [...prev, res.data]));
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setAddNewComment(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <>
            {posts?.filter(f => f.id == postId)
                .map(e => (
                    <div key={e.id}>
                        <h2 className={styles.postTitle}>{e.title}</h2>
                        <p className={styles.postBody}>{e.body}</p>
                        <p className={styles.postLike} onClick={addToFavorite} id={e.id}>
                            <span className={styles.addToFavorite}>
                                <ion-icon name="heart" />
                            </span> Add article to favorite
                        </p>
                    </div>
                ))
            }
            <h2 className={styles.commentsHeading}>Comments</h2>
            <div className={styles.comments}>
                <form onSubmit={addComment} className={styles.addComment}>
                    <input type="text" placeholder="Comment title" name="name" value={addNewComment.name} onChange={handleChange} />
                    <textarea placeholder="Comment content" name="body" value={addNewComment.body} onChange={handleChange} />
                    <input type="email" placeholder="Your email" name="email" value={addNewComment.email} onChange={handleChange} />
                    <button type="submit">Add comment</button>
                </form>
                {comments?.filter(f => f.postId == postId)
                    .reverse().map(e => (
                        <div className={styles.comment} key={e.id}>
                            <h3 className={styles.commentName}>{e.name}  &#9702; <span className={styles.commentEmail}>{e.email}</span></h3>
                            <p className={styles.commentBody}>{e.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Post;
