
import Card from "./Card";
import './Blog.css'
import data from "./data";


function Blog() {
  return (
    <div className="blog">
      {data.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </div>
  );
}

export default Blog;
