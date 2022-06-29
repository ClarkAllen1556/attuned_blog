import { useState } from 'react';
// import Hero from '~/components/Hero';
import Header from '~/components/Header';
import Card from '~/components/Card';
import Post from '~/components/Post/Post';
import Button from './components/Button';

// import DesktopContainer from '~/components/containers/DesktopContainer';
// import MobileContainer from '~/components/containers/MobileContainer';

interface BlogPost {
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
  ];

  const doThing = () => {
    console.log('this is do thing');
  };

  return (
    <div>
      <Header />

      <div className="w-full p-8 max-w-5xl ml-auto mr-auto">
        {dummyPosts.map((p) => (
          <Card>
            {{
              content: <Post postTitle={p.title} postContents={p.content} />,
              footer: <Button buttonLabel="Show comments" click={doThing} />,
            }}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
