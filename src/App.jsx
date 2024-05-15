import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChallengeBy from "./components/ChallengeBy";
import ProductPage from "./pages/ProductPage";

import "./reset.css";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <div className="main-div">
          <Routes>
            <Route index element={<ProductPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ChallengeBy />
    </main>
  );
}

export default App;
