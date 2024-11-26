import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import '/Users/D2JS/Desktop/svetaines/1(1) - darbas/src/App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />

          <Route
            path="products/:id"
            element={<Product />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          >
            <Route
              path="profile"
              element={<Profile />}
            />
            <Route
              path="settings"
              element={<Settings />}
            />
          </Route>
        </Routes>
      </main>

      {/* <footer>Copyright 2024, TECHIN, Vilnius</footer> */}
    </>
  );
}

export default App;
