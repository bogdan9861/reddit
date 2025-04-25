import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Comments from "./pages/Comments/Comments";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import Create from "./pages/Create/Create";
import Profile from "./pages/Profile/Profile";
import Me from "./pages/Me";

function App() {
  return (
    <Router>
      <Aside />
      <Header isAuth={true} />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/create" Component={Create} />
        <Route path="/profile/me" Component={Me} />
        <Route path="/profile/:id" Component={Profile} />
        <Route path="/post/:id/comments" Component={Comments} />
      </Routes>
    </Router>
  );
}

export default App;
