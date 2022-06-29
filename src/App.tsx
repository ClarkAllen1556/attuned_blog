import { useState } from 'react';
// import Hero from '~/components/Hero';
import Header from '~/components/Header';
import Card from '~/components/Card';
import Post from '~/components/Post/Post';
import Button from './components/Button';

// import DesktopContainer from '~/components/containers/DesktopContainer';
// import MobileContainer from '~/components/containers/MobileContainer';

interface BlogPost {
  comments: number[];
}

function App() {
  const dummyPost: BlogPost = {
    comments: [1, 2, 3, 4],
  };

  const numberOfComments = function (post: BlogPost) {
    return post.comments.length;
  };

  const doThing = () => {
    console.log('this is do thing');
  };

  return (
    <div className="flex flex-col h-full w-full">
      <Header />

      <div className="flex justify-center">
        <div className="w-full lg:w-3/4">
          <Card>
            <Post
              postTitle={'Post 1'}
              postContents={'Some really dope contents'}
            />

            <Button
              buttonLabel={`Show comments (${numberOfComments(dummyPost)})`}
              click={doThing}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
