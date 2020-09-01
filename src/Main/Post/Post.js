import React, { useContext } from 'react';
import {
    useParams
} from "react-router-dom";

import styles from "./Post.css";
import { AppContext } from "./../../AppContext/AppContext";

const Post = () => {
    const { posts, comments, addComment, addNewComment, handleInputValue, addToFavorite } = useContext(AppContext);
    const { postId } = useParams();

    return (
        <>
            {posts?.filter(e => e.id == postId)
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
                <form onSubmit={addComment} className={styles.addComment} id={postId}>
                    <input type="text" placeholder="Comment title" name="name" value={addNewComment.name} onChange={handleInputValue} />
                    <textarea placeholder="Comment content" name="body" value={addNewComment.body} onChange={handleInputValue} />
                    <input type="text" placeholder="Your email" name="email" value={addNewComment.email} onChange={handleInputValue} />
                    <button type="submit">Add comment</button>
                </form>
                {comments?.filter(e => e.postId == postId)
                    .reverse()
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
