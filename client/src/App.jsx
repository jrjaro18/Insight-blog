import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import Register from './components/Register';
import Home from './components/Home';
import BlogPage from './components/BlogPage';
import Upload from './components/Upload';
import SearchPage from './components/SearchPage';
import AuthorPage from './components/AuthorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/author-page" element={<AuthorPage />} />
          <Route path="*" element={"Wrong Page"} />
          <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
