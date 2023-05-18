import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import PortFolio from "./components/portfolio/PortFolio";
import MyPage from "./components/mypage/MyPage";
import Upload from "./components/upload/Upload";
import Test from "./components/portfolio/DesignerPortFolio";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Test />}></Route> */}

          <Route path="/" element={<Layout />}></Route>
          <Route path="/PortFolio" element={<PortFolio />}></Route>
          <Route path="/MyPage" element={<MyPage />}></Route>
          <Route path="/Upload" element={<Upload />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
