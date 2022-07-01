import Header from '~/components/Header';
import Button from '~/components/Button';
import Search from '~/components/Search';
import Footer from '~/components/Footer';
import ThemeSwitch from '~/features/theme/ThemeSwitch';
import Feed from '~/features/feed/Feed';
import { useAppDispatch, useAppSelector } from '~/common/hooks';
import {
  decrementPage,
  incrementPage,
  populateFeed,
} from '~/features/feed/feed';
import { useEffect } from 'react';

function App() {
  const feed = useAppSelector((state) => state.feed);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(populateFeed({ page: feed.currentPage, limit: 5 }));
  }, [feed.currentPage]);

  function nextPage() {
    dispatch(incrementPage());
  }

  function previousPage() {
    dispatch(decrementPage());
  }

  return (
    <div>
      <Header>
        <ThemeSwitch />
        <Search placeHolder="Search..." />
      </Header>

      <Feed posts={feed.posts} />

      <Footer>
        <Button
          btnLabel="Prev"
          variant="secondary"
          click={previousPage}
          isDisabled={feed.currentPage === 1}
        />
        <div> Current page: {feed.currentPage} </div>
        <Button btnLabel="Next" variant="secondary" click={nextPage} />
      </Footer>
    </div>
  );
}

export default App;
