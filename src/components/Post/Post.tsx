interface Props {
  postTitle: string;
  postContents: string;
}

export default function Post({ postTitle, postContents }: Props) {
  return (
    <article>
      <h2>{postTitle}</h2>

      <p>{postContents}</p>
    </article>
  );
}
