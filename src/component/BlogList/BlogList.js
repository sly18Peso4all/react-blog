import classes from "./BlogList.module.css";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, header }) => {
  return (
    <div className={classes.blogList}>
      <h2>{header}</h2>
      {blogs.map((blog) => (
        <div className={classes.blogPreview} key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
