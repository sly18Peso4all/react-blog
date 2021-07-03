import useFetch from "../../customHook/useFetch";
import { useHistory, useParams } from "react-router-dom";
import classes from "./BlogDetails.module.css";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8001/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8001/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className={classes.blogDetails}>
      {error && <div>{error}</div>}
      {isPending && <h2 style={{ textAlign: "center" }}>Loading...</h2>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h4>Written by {blog.author}</h4>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
