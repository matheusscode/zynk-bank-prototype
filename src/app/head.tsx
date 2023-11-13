interface HeadProps {
  title: string;
  content: string;
}

export default function Head({ content, title }: HeadProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device=width, initial-scale=1" />
      <meta name="description" content={content} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
