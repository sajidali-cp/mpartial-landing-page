import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import FeeStructure from "./pages/FeeStructure/FeeStructurePage";
import GroundTruthDataPage from "./pages/GroundTruthDataPage/GroundTruthDataPage";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
function App() {
  return (
    <Router>
      <Header />
      <Home />
      <GroundTruthDataPage/>
      <HowItWorks/>
      <FeeStructure/>
      <Footer/>
    </Router>
  );
}

export default App;
