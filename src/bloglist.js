import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {blogs.map((item) => {
        return (
          <div key={item.id} className="blog">
            <Link to={`blogs/${item.id}`}>
              <h1> written by {item.author}</h1>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
