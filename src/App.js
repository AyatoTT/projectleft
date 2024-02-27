import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home"
import Services from  "./pages/services/services"
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/services" element={<Services />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
