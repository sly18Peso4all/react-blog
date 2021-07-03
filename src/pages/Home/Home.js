import useFetch from "../../customHook/useFetch";
import BlogList from "../../component/BlogList/BlogList";
import classes from "./Home.module.css";

const Home = () => {
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch("http://localhost:8001/blogs");

  return (
    <div className={classes.home}>
      {error && <div>{error}</div>}
      {isPending && <h3 style={{ textAlign: "center" }}>Loading data...</h3>}
      <BlogList blogs={blogs} header="All Blogs" />
    </div>
  );
};

export default Home;
