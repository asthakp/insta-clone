import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Signin from "./pages/Signin.tsx";
import Signup from "./pages/Signup.tsx";
import Profile from "./pages/Profile.tsx";
import Feed from "./components/Feed/feed.tsx";
import CreatePost from "./components/CreatePost/index.tsx";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header.tsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Signup />} />
        <Route path="/" element={<Header />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/add" element={<CreatePost />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
