import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import "./index.css";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    error,
    isloading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };
  return (
    <div className="blog-Details">
      {isloading && <div>loading . . .</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="articl">
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <p> {blog.body} </p>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
