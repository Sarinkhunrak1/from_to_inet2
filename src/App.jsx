import React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/Home";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
