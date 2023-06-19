
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App () {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={LandingPage}/>
          {/* <Route path="/" element=""/>
          <Route path="/" element=""/>
          <Route path="/" element=""/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
