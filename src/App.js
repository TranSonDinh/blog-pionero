import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MostCommentPost from "./pages/MostCommentPost";
import MostLikedPost from "./pages/MostLikedPost";
import Profile from "./pages/Profile"
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route element={<MostCommentPost />} path="/most-comment-post" />
        <Route element={<MostLikedPost />} path="/most-liked-post" />
        <Route element={<Profile />} path="/profile/:id" />
        <Route element={<Post />} path="/post/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
