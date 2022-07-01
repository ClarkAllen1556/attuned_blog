import { IPost } from '~/common/interfaces/Post.interface';
import { IRequest } from '~/common/interfaces/Request.interface';

import { createQuery } from '~/common/api/helper';

const POST_URI = 'https://jsonplaceholder.typicode.com/posts';

function fetchPosts(opts: IRequest): Promise<IPost[]> {
  return _fetchPosts(opts);
}

function searchPosts(query: string | null): Promise<IPost[]> {
  return fetch(POST_URI + '?_limit=5&' + `q=${query}`, {
    method: 'GET',
  }).then((resp) => {
    return resp.json();
  });
}

function _fetchPosts({ page = 1, limit = 5 }: IRequest): Promise<IPost[]> {
  return fetch(POST_URI + '?' + createQuery({ page, limit }), {
    method: 'GET',
  }).then((resp) => {
    return resp.json();
  });
}

export { fetchPosts, searchPosts };
