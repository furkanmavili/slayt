import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "~components/layout";

const Home = lazy(() => import("~views/home"));
const Slide = lazy(() => import("~views/slide"));
const Login = lazy(() => import("~views/auth/login"));
const Register = lazy(() => import("~views/auth/register"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="slides/:id" element={<Slide />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
