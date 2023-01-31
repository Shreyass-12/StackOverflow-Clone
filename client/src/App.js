import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AllRoutes from "./AllRoutes"

function App() {
  return (
    <Router>
      <Navbar />
      <AllRoutes/>
      {/* <Routes>
        <Route path="/" element={<div>Home component</div>}></Route>
      </Routes> */}
    </Router>
  );
}

export default App;
