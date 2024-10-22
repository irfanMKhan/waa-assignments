import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EditPost from "./components/EditPost";
import PostDetails from "./components/PostDetails";
import PostsList from "./components/PostsList";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/posts">Posts</Link>
      </nav>

      <Routes>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
      </Routes>
    </Router>
  );
};

export default App;
