import BlogPost from "./components/BlogPost";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopPosts from "./components/TopPosts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="mx-auto max-w-6xl">
              <Navbar />
              <Hero />
              <TopPosts />
            </div>
          }
        />
        <Route path="/clogs/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
