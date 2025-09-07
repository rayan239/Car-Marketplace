import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PaymentGateway from "./pages/PaymentGateway";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
