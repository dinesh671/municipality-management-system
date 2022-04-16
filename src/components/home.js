import "../app.css";
import Slides from "./Carousel";
import Plan from "./Plan";
import Product from "./Products";
import Body from "./Body";

function Home() {
  return (
    <div>
       <Slides/>
      <Body/>
      <Plan/>
      <Product/>
    </div>
  );
}

export default Home;