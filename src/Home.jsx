import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isloading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <>
      <h1
        style={{
          color: "yellow",
          background: "orange",
          border: "3px",
          textTransform: "uppercase",
        }}
      >
        homepage
      </h1>
      {error && <p>{error}</p>}
      {isloading && <p>loading . . .</p>}
      {blogs && <BlogList blogs={blogs} title="props!" />}
    </>
  );
};

export default Home;
