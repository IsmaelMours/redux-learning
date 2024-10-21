import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = {
  posts: [
    { id: 1, 
      title: "First Post", 
      content: "This is my first blog post", 
      date: sub(new Date(), {minutes: 10 }).toISOString()
     },
    { id: 2, 
      title: "Second Post", 
      content: "Learning React and Redux!",
     date: sub(new Date(), {minutes: 5 }).toISOString() },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
