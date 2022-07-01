import { IPost } from '~/common/interfaces/Post.interface';
import { IRequest } from '~/common/interfaces/Request.interface';

import { createQuery } from '~/common/api/helper';

const POST_URI = 'https://jsonplaceholder.typicode.com/posts';

function fetchPosts(opts: IRequest): Promise<IPost[]> {
  return _fetchPosts(opts);
}

function _fetchPosts({
  page = 1,
  limit = 5,
  query = '',
}: IRequest): Promise<IPost[]> {
  return fetch(
    POST_URI + '?' + createQuery({ _page: page, _limit: limit, q: query }),
    {
      method: 'GET',
    }
  ).then((resp) => {
    return resp.json();
  });
}

export { fetchPosts };
