import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../utils/Container";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <div className="min-h-[60vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
