import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={"Wrong Page"} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
