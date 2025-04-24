import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
      </Routes>
    </Router>
  );
}

export default App;
