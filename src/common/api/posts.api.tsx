import { IPost } from '~/common/interfaces/Post.interface';
import { IRequest } from '~/common/interfaces/Request.interface';

const POST_URI = 'https://jsonplaceholder.typicode.com/posts';

function fetchPosts({ page, limit }: IRequest): Promise<IPost[]> {
  return fetch(POST_URI + `?_page=${page}&_limit=${limit}`, {
    method: 'GET',
  }).then((resp) => {
    return resp.json();
  });
}

export { fetchPosts };
