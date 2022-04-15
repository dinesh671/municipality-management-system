import "./app.css";
import Header from './components/Navbar';
import Slides from "./components/Carousel";
import Plan from "./components/Plan";
import Product from "./components/Products";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Header/>
      <Slides/>
      <Body/>
      <Plan/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
