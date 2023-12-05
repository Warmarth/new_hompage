import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NewBlog from "./newBlog";
import BlogDetails from "./blogDetails";
import NotFound from "./notFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container"></div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newblog">
            <NewBlog />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
