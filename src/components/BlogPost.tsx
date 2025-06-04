import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import clogs from '../clogs/clogs';

function BlogPost() {
  const { slug } = useParams();
  const post = clogs.find(p => p.slug === slug);

  if (!post) {
    return <div>404 - Post not found</div>;
  }

  return (
    <div className='text-white py-24 px-6 max-w-4xl mx-auto'>
      <h1>{post.title}</h1>
      <ReactMarkdown children={post.file} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default BlogPost;
