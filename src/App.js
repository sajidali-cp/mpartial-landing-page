import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}

export default App;
