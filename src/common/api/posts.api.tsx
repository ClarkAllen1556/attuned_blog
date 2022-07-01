import { IPost } from '../interfaces/Post.interface';
import { IRequest } from '../interfaces/Request.interface';

const POST_URI = 'https://jsonplaceholder.typicode.com/posts';

function fetchPosts({ page, limit = 5 }: IRequest): Promise<IPost[]> {
  return fetch(POST_URI + `?_page=${page}&_limit=${limit}`, {
    method: 'GET',
  }).then((resp) => {
    return resp.json();
  });
}

export { fetchPosts };
