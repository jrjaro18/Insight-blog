import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={"Incorrect URL Entered"} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
