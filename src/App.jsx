import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ParticlesBackground />

      <Navbar />

      <AppRoutes />

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;