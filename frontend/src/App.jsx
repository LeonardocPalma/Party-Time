import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
