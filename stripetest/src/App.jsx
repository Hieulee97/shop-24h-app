import Pay from "./scenes/Pay";
import Success from "./scenes/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";



const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/pay" element={<Pay />}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  )
};

export default App;