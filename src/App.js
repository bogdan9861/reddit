import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Comments from "./pages/Comments/Comments";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header isAuth={true} />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/post/:id/comments" Component={Comments} />
      </Routes>
    </Router>
  );
}

export default App;
