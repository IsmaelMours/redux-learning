import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import React from "react";

const PostAuthor = ({ userId }) => { // Pass userId as a prop
  const users = useSelector(selectAllUsers);
  const author = users.find(user => user.id === userId);

  return (
    <span>
      {author ? author.name : 'Unknown author'}
    </span>
  );
};

export default PostAuthor;
