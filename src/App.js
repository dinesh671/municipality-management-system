import "./app.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
import Service from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login from "./components/Login";
import TradeLicense from "./components/tradeLicense";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/tradeLicense" element={<TradeLicense/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
