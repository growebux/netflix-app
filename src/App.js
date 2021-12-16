import react from "react";
import "./App.css";
import { render } from "react-dom"
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    
        <div className="App">
            {/* <BrowserRouter>
                <Routes>
                 <Route exact path="/" element={<HomeScreen />}/>
                </Routes>
            </BrowserRouter>, */}
            
        </div>
     
      
  );
}

export default App;
