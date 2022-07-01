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
    <div className="border-t border-sol-grey-1 pt-2">
      {comments.postComments.map((c) => (
        <div className="mb-1">
          <h3>{c.name}:</h3>
          <div className="border-l border-sol-grey-1">
            <p className="pl-4">{c.body}</p>

            <div className="pl-2 italic">{c.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentFeed;
