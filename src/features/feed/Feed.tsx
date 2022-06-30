import { IPost } from '~/common/interfaces/Post.interface';
import Button from '~/components/Button';
import Card from '~/components/Card';
import Post from '~/components/Post';

interface Props {
  posts: IPost[];
}

function Feed({ posts }: Props) {
  const showComments = (postId: number) => {
    console.log(posts.find((p) => p.id === postId));
  };

  function showCommentsButton(post: IPost) {
    // if (post.comments.length) {
    //   return (
    //     <Button
    //       variant="text"
    //       btnLabel={`Show comments (${post.comments.length})`}
    //       click={() => showComments(post.id)}
    //     />
    //   );
    // }

    return <em> No comments </em>;
  }
  return (
    <div className="w-full p-8 max-w-5xl ml-auto mr-auto">
      {posts.map((p) => (
        <Card>
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
