import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/common/hooks';
import { populateComments } from '~/features/commentFeed/commentFeed';

interface Props {
  postId?: number;
}

function CommentFeed({ postId }: Props) {
  const comments = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(populateComments({ postId: postId }));
  }, [postId]);

  return (
    <div>
      {comments.postComments.map((c) => (
        <div>
          {c.id} : {c.body}
        </div>
      ))}
    </div>
  );
}

export default CommentFeed;
