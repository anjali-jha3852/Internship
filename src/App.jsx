import { Routes, Route, useLocation } from "react-router-dom";
import MoreDetails from "./Components/MoreDetails";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {

  const location = useLocation();
 const isMorePage = location.pathname === "/more";

  return (
    <div className="mx-auto">
      
      {!isMorePage && (

        <nav className="container mx-auto bg-blue-950 text-white flex justify-between items-center p-6 pt-3">
          <h1 className="text-white font-extrabold">InstaWeb Labs Pvt Ltd</h1>
         <ul className="flex gap-4">
            <li><a href="#Home" className="hover:text-gray-300 text-2xl text-bold">Home</a></li>
            <li><a href="#About" className="hover:text-gray-300 text-2xl text-bold">About</a></li>
            <li><a href="#Contact" className="hover:text-gray-300 text-2xl text-bold">Contact</a></li>
          </ul>
          
        </nav>
      )}

      <Routes>
       
        <Route path="/more" element={<MoreDetails />} />
       <Route
          path="/"
          element={
       
            <>
              <Home />
              <About />
              <Contact />
              <Footer/>
            </>
           }
        />
      </Routes>
          
    </div>
  );
}

export default App;