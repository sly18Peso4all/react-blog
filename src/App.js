import NavBar from "./component/NavBar/NavBar";
import Home from "./pages/Home/Home";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./component/BlogDetails/BlogDetails";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/createblog">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
