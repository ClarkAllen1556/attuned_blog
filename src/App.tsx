import Header from '~/components/Header';
import Card from '~/components/Card';
import Post from '~/components/Post';
import Button from '~/components/Button';
import Search from '~/components/Search';
import Footer from '~/components/Footer';
import ThemeSwitch from '~/features/theme/ThemeSwitch';

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

  const showComments = (postId: number) => {
    console.log(dummyPosts.find((p) => p.id === postId)?.comments);
  };

  function showCommentsButton(post: BlogPost) {
    if (post.comments.length) {
      return (
        <Button
          variant="text"
          btnLabel={`Show comments (${post.comments.length})`}
          click={() => showComments(post.id)}
        />
      );
    }

    return <em> No comments </em>;
  }

  return (
    <div>
      <Header>
        <ThemeSwitch />
        <Search placeHolder="Search..." />
      </Header>

      <div className="w-full p-8 max-w-5xl ml-auto mr-auto">
        {dummyPosts.map((p) => (
          <Card>
            {{
              content: <Post postTitle={p.title} postContents={p.content} />,
              footer: showCommentsButton(p),
            }}
          </Card>
        ))}
      </div>

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
