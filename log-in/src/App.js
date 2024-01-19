
import Login from "./components/Login";
import Regitro from "./components/Registro";
import Perfil from "./components/Perfil";
import Navbar from "./components/Navbar";
import{BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="caja">
      <Router>
          <div>
              <Routes>
                  <Route path="/" exact elemenet={Navbar}/>
                  <Route path="/login" element={Login}/>
                  <Route path="/registro" elemenet={Regitro}/>
                  <Route path="/perfil" elemenet={Perfil}/>
              </Routes>
          </div>
      </Router>
    </div>
    
    
  );
}

export default App;
