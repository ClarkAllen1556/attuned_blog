import { IComment } from '~/common/interfaces/Comment.interface';
import { IRequest } from '~/common/interfaces/Request.interface';

const COMMENT_URI = 'https://jsonplaceholder.typicode.com/comments';

function fetchComments(opts: IRequest): Promise<IComment[]> {
  return _fetchComments(opts);
}

function fetchCommentsByPostId(opts: IRequest) {
  return _fetchComments(opts);
}

function _fetchComments({ page = 1, limit = 5, postId }: IRequest) {
  return fetch(COMMENT_URI + '?' + _createQuery({ page, limit, postId }), {
    method: 'GET',
  }).then((resp) => {
    return resp.json();
  });
}

function _createQuery(opts: any): string {
  return Object.keys(opts)
    .map((o) => o + '=' + opts[o])
    .join('&');
}

export { fetchComments, fetchCommentsByPostId };
