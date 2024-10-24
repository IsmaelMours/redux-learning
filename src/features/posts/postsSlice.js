import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from 'date-fns';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () =>{
  try {
    const response = await axios.get(POSTS_URL)
    return [...response.data];
  } catch (error) {
    return error.message;
  }
})


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
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find(post => post.id === postId); // Correctly access posts array
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder){
    builder
    .addCase(fetchPosts.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchPosts.fulfilled, (state, action)=>{
      state.status = 'succeeded'
      let min = 1;
      const loadedPosts = action.payload.map(post => {
        post.date = sub(new Date(), {minutes: min++}).toISOString()
        post.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0
        }
        return post
      })
    })
  }

});

export const selectAllPosts = (state) => state.posts.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
