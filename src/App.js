import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GroundTruthDataPage from "./pages/GroundTruthDataPage/GroundTruthDataPage";
function App() {
  return (
    <Router>
      <Header />
      <Home />
      <GroundTruthDataPage/>
    </Router>
  );
}

export default App;
