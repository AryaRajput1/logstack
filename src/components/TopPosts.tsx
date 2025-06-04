import BlogCard from "./BlogCard";
import clogs from "../clogs/clogs";

const TopPosts = () => {
    const topLogs = clogs.filter(log => log.topLog); // Get the first 3 posts for demonstration

  return (
    <section className="text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold">🚀 Top Posts</h1>
        <p className="text-xs">
          Explore our most popular articles
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            topLogs.map((log, index) => (
                <BlogCard key={index} log={log} />
            ))
        }
      </div>
    </section>
  );
};
export default TopPosts;
