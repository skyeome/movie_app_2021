import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Reset from "./Reset";

function App() {
  return <>
  <Reset />
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>
    </Routes>
  </Router>
  </>;
}

export default App;
