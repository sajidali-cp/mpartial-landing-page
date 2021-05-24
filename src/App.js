import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <Header />
      <Switch></Switch>
    </Router>
  );
}

export default App;
