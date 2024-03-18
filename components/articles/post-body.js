export default function PostBody({ content }) {
  return (
    <div className="body">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
