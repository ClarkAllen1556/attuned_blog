import { useAppDispatch, useAppSelector } from '~/common/hooks';
import { IPost } from '~/common/interfaces/Post.interface';
import Button from '~/components/Button';
import Card from '~/components/Card';
import Post from '~/components/Post';
import { populateComments } from '../comment/comment';

interface Props {
  posts: IPost[];
}

function Feed({ posts }: Props) {
  const comments = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  const showComments = (postId: number) => {
    dispatch(populateComments({ postId: postId }));
  };

  function showCommentsButton(post: IPost) {
    return (
      <Button
        variant="text"
        btnLabel={`Show comments `}
        click={() => showComments(post.id)}
      />
    );
  }
  return (
    <div className="w-full p-8 max-w-5xl ml-auto mr-auto">
      {posts.map((p) => (
        <Card key={p.id}>
          {{
            content: <Post postTitle={p.title} postContents={p.body} />,
            footer: showCommentsButton(p),
          }}
        </Card>
      ))}
    </div>
  );
}

export default Feed;
