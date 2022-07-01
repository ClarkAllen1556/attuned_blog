import { configureStore } from '@reduxjs/toolkit';
import { localStorageMiddleware } from '~/common/middleware/localStorage.middle';
import themeReducer from '~/features/theme/theme';
import feedReducer from '~/features/feed/feed';
import commentReducer from '~/features/commentFeed/commentFeed';
import searchReducer from '~/features/search/search';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    feed: feedReducer,
    comments: commentReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
