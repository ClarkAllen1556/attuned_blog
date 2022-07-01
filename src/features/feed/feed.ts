import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPosts, searchPosts } from '~/common/api/posts.api';

import { IPost } from '~/common/interfaces/Post.interface';
import { IRequest } from '~/common/interfaces/Request.interface';

interface FeedState {
  posts: IPost[];
  currentPage: number;
}

const initialState: FeedState = {
  posts: [],
  currentPage: 1,
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState: initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage++;
    },
    decrementPage: (state) => {
      state.currentPage--;
    },
  },
  extraReducers(builder) {
    builder.addCase(populateFeed.fulfilled, (state, action) => {
      state.posts = action.payload;
    });

    builder.addCase(searchFeed.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const populateFeed = createAsyncThunk(
  'feed/populateFeed',
  async (opts: IRequest) => {
    const posts = await fetchPosts(opts);

    return posts;
  }
);

export const searchFeed = createAsyncThunk(
  'feed/searchFeed',
  async (query?: string) => {
    const posts = await searchPosts(query);

    return posts;
  }
);

export default feedSlice.reducer;
export const { incrementPage, decrementPage } = feedSlice.actions;
