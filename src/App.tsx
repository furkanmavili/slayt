import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "~components/layout";

const Home = lazy(() => import("~views/home"));
const Slides = lazy(() => import("~views/slides"));
const Slide = lazy(() => import("~views/slide"));
const Login = lazy(() => import("~views/auth/login"));
const Register = lazy(() => import("~views/auth/register"));

function App() {
  console.log("rendering");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="slides" element={<Slides />} />
            <Route path="slides/:id" element={<Slide />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
