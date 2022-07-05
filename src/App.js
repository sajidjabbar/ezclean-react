import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.css";
// import '../src/assets/css/owl.carousel.min.css';
import '../src/assets/css/animate.min.css';
import "../src/assets/css/responsive.css";
import PubilcRoutes from "./Router/PublicRouter";
import 'bootstrap/dist/js/bootstrap.js';
import Header from "./components/Header";
import React from "react";
// import  '../src/assets/js/main.js';

function App() {
  return (
    <>
        <PubilcRoutes />
    </>
  );
}

export default App;
