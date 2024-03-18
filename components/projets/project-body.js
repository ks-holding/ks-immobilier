export default function ProjectBody({ content }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
