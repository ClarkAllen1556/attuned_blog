import Header from '~/components/Header';
// import Card from '~/components/Card';
// import Post from '~/components/Post';
import Button from '~/components/Button';
import Search from '~/components/Search';
import Footer from '~/components/Footer';
import ThemeSwitch from '~/features/theme/ThemeSwitch';
import Feed from '~/features/feed/Feed';

interface BlogPost {
  id: number;
  author: string;
  title: string;
  content: string;
  comments: {
    content: string;
    author: string;
  }[];
}

function App() {
  const dummyPosts: BlogPost[] = [
    {
      id: 1,
      author: 'ac1556',
      title: 'Why linux is awesome!',
      content:
        'cause it makes your better than everyone else. trust me, I use linux.',
      comments: [
        {
          content: 'i like apples',
          author: 'sheep',
        },
        {
          content: 'windows is better',
          author: 'moneybags',
        },
      ],
    },
    {
      id: 2,
      author: 'ac1556',
      title: 'test 2',
      content:
        'cause it makes your better than everyone else. trust me, I use linux.',
      comments: [],
    },
  ];

  return (
    <div>
      <Header>
        <ThemeSwitch />
        <Search placeHolder="Search..." />
      </Header>

      <Feed posts={dummyPosts} />

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
