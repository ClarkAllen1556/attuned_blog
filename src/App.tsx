import Header from '~/components/Header';
import Button from '~/components/Button';
import Search from '~/components/Search';
import Footer from '~/components/Footer';
import ThemeSwitch from '~/features/theme/ThemeSwitch';
import Feed from '~/features/feed/Feed';
import { useAppDispatch, useAppSelector } from '~/common/hooks';
import { populateFeed } from '~/features/feed/feed';
import { useEffect } from 'react';

function App() {
  const feed = useAppSelector((state) => state.feed);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(populateFeed({ limit: 5 }));
  }, []);

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
          click={() => console.log('prev')}
        />
        <Button
          btnLabel="Next"
          variant="secondary"
          click={() => console.log('next')}
        />
      </Footer>
    </div>
  );
}

export default App;
