import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Products from "./Components/Products";

import Wishlist from "./Components/Wishlist";
function App() {
  return (
    <>
      {/* <CounterSection /> */}
      {/* <Todo/> */}
      {/* <Category/> */}
      <Wishlist />
      <Products />
      
    </>
  );
}

export default App;
