import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '~/common/api/posts.api';

import { IPost } from '~/common/interfaces/Post.interface';
import { IRequest } from '~/common/interfaces/Request.interface';

interface FeedState {
  posts: IPost[];
}

const initialState: FeedState = {
  posts: [],
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(populateFeed.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const populateFeed = createAsyncThunk(
  'feed/fetchPosts',
  async ({ page, limit }: IRequest) => {
    const posts = await fetchPosts({ page, limit });

    return posts;
  }
);

export default feedSlice.reducer;
