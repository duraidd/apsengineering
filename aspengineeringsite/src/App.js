import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Windpower from "./Services/Windpower";
import Civil from "./Services/Civil";
import Electrical from "./Services/Electrical";
import Powerplant from "./Services/Powerplant";
import Rooftop from "./Services/Rooftop";
import Solarenergy from "./Services/Solarenergy";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/windpower" element={<Windpower/>}/>
        <Route path="/civil" element={<Civil/>}/>
        <Route path="/electrical" element={<Electrical/>}/>
        <Route path="/solarenergy" element={<Powerplant/>}/>
        <Route path="/rooftop" element={<Rooftop/>}/>
        <Route path="/powerplant" element={<Solarenergy/>}/>        
      </Routes>            
    </BrowserRouter>
  )
}

export default App