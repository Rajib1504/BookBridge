import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <nav className="w-full fixed backdrop-blur-md backdrop-saturate-150 bg-white/30 text-base shadow-md top-0 z-50">
        <Navbar/>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
