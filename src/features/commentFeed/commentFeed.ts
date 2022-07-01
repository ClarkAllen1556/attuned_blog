import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCommentsByPostId } from '~/common/api/comments.api';
import { IComment } from '~/common/interfaces/Comment.interface';
import { IRequest } from '~/common/interfaces/Request.interface';

interface CommentState {
  postComments: IComment[];
}

const initialState: CommentState = {
  postComments: [],
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(populateComments.fulfilled, (state, action) => {
      state.postComments = action.payload;
    });
  },
});

export const populateComments = createAsyncThunk(
  'comment/populateComments',
  async (opts: IRequest) => {
    const comments = await fetchCommentsByPostId(opts);

    return comments;
  }
);

export default commentSlice.reducer;
