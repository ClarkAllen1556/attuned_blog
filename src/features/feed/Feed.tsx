import { useState } from 'react';
import { IPost } from '~/common/interfaces/Post.interface';
import Button from '~/components/Button';
import Card from '~/components/Card';
import Post from '~/components/Post';
import CommentFeed from '~/features/commentFeed/CommentFeed';

interface Props {
  posts: IPost[];
}

function Feed({ posts }: Props) {
  const [selectedPost, setSelectedPost] = useState<number | undefined>();

  function showComments() {
    return (
      <>
        <div>
          <Button
            variant="text"
            btnLabel="Hide comments"
            click={() => setSelectedPost(undefined)}
          />
        </div>
        <CommentFeed postId={selectedPost} />
      </>
    );
  }

  function showCommentsButton(post: IPost) {
    return (
      <Button
        variant="text"
        btnLabel={`Show comments`}
        click={() => setSelectedPost(post.id)}
      />
    );
  }

  return (
    <div className="w-full p-8 max-w-5xl ml-auto mr-auto">
      {posts.map((p) => (
        <Card key={p.id}>
          {{
            content: <Post postTitle={p.title} postContents={p.body} />,
            footer:
              selectedPost === p.id ? showComments() : showCommentsButton(p),
          }}
        </Card>
      ))}
    </div>
  );
}

export default Feed;
