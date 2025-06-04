interface BlogCardPropsTypes {
    log: {
        title: string
        description: string
    }
}

const BlogCard = ({ log }: BlogCardPropsTypes) => {
  const { title, description } = log;
  return (
    <section>
      <div className="mx-auto px-6 py-12">
        <div className="rounded-lg shadow-lg p-6 border border-gray-700 hover:bg-gray-700 transition-colors">
          <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-300 mb-4">{description}</p>
          <a
            href="/clogs/hello-world"
            className="text-pink-400 hover:text-pink-300 transition-colors"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};
export default BlogCard;
