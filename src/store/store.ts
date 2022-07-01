import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import themeReducer from '~/features/theme/theme';
import feedReducer from '~/features/feed/feed';
import commentReducer from '~/features/commentFeed/commentFeed';
import { localStorageMiddleware } from '~/common/middleware/localStorage.middle';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    feed: feedReducer,
    comments: commentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
