import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login.js";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs.js";
import CreateBlog from "./pages/CreateBlog.js";
import BlogDetails from "./pages/BlogDetails.js";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Header />
      <Toaster />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-blogs" element={<UserBlogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
