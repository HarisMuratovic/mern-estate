import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUP';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" elemnt={<Home />} />
          <Route path="/Sign-in" elemnt={<SignIn />} />
          <Route path="/Sign-up" elemnt={<SignUp />} />
          <Route path="/about" elemnt={<About />} />
          <Route path="/profile" elemnt={<Profile />} />
        </Routes>
      </BrowserRouter>);
}
