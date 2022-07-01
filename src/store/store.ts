import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import themeReducer from '~/features/theme/theme';
import feedReducer from '~/features/feed/feed';
import { localStorageMiddleware } from '~/common/middleware/localStorage.middle';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    feed: feedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
