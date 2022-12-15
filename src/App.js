import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import HomeFeature from "./features/Home";
import ProductFeature from "./features/Product";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index path="/" element={<HomeFeature/>}/>
        <Route path="/products/*" element={<ProductFeature/>}/>
      </Routes>
    </div>
  );
}

export default App;
