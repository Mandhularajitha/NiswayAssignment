import { Articles } from "./Article/Articles";
import { Route, Routes } from "react-router-dom";
import { News } from "./News/News";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles/>} />
        <Route path="/news">
          <Route path=":id" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
