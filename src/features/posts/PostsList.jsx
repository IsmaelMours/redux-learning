import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import React from 'react';
import PostAuthor from "./postAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  
  const orderedPosts = posts.slice().sort((a, b)=> b.date.localeCompare(a.date))

  return (
    <ul>
      {orderedPosts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>
            <PostAuthor userId = {post.userId}/>
            <TimeAgo timestamp = {post.date}/>
          </p>
          <ReactionButtons post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
