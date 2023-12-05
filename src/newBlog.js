import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("hello");
  const [body, setBody] = useState("hello");
  const [author, setAuthor] = useState("Warmarth");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog add");
      setLoading(false);
      // history.go(-1);
      history.push("/");
    });
  };
  return (
    <div>
      <h2>All New Blogs </h2>
      <form className="create" onSubmit={handleSubmit}>
        <label> blog title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <label>blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="nehal">nehal</option>
          <option value="warmarth">warmarth</option>
        </select>
        {!loading && <button> add blog</button>}
        {loading && <button> adding New blog. . .</button>}
      </form>
    </div>
  );
};

export default NewBlog;
