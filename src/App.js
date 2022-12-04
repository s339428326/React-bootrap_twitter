import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Test, ComponentStyle, LoginPage, RegistPage } from "./pages";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regist" element={<RegistPage />} />
          {/* Test Page */}
          <Route path="/test" element={<Test />} />
          <Route path="/style" element={<ComponentStyle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
