import React from 'react';
import {
    useParams
} from "react-router-dom";

import styles from "./Post.css";

const Post = ({ posts, comments, setFavorite }) => {
    const { post } = useParams();

    const addToFavorite = () => {
        setFavorite(post);
    }

    return (
        <>
            {posts?.filter(f => f.id == post)
                .map(e => (
                    <div key={e.id}>
                        <h2 className={styles.postTitle}>{e.title}</h2>
                        <p className={styles.postBody}>{e.body}</p>
                        <p className={styles.postLike}>
                            <span className={styles.postHeart} onClick={addToFavorite}>
                                <ion-icon name="heart" />
                            </span> Add article to favorites</p>
                    </div>
                ))
            }
            <h2 className={styles.commentsHeading}>Comments</h2>
            <div className={styles.comments}>
                <form className={styles.addComment}>
                    <input type="text" placeholder="Comment title" />
                    <textarea placeholder="Comment content" />
                    <input type="text" placeholder="Your email" />
                    <button type="submit">Add comment</button>
                </form>
                {comments?.filter(f => f.postId == post)
                    .map(e => (
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
