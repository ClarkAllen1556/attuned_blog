import { IComment } from '~/common/interfaces/Comment.interface';
import { IRequest } from '~/common/interfaces/Request.interface';

import { createQuery } from '~/common/api/helper';

const COMMENT_URI = 'https://jsonplaceholder.typicode.com/comments';

function fetchComments(opts: IRequest): Promise<IComment[]> {
  return _fetchComments(opts);
}

function _fetchComments({
  page = 1,
  limit = 5,
  postId,
}: IRequest): Promise<IComment[]> {
  return fetch(COMMENT_URI + '?' + createQuery({ page, limit, postId }), {
    method: 'GET',
  }).then((resp) => {
    return resp.json();
  });
}

export { fetchComments };
