import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Platform from "./sections/Platform";
import Solutions from "./sections/Solutions";
import Architecture from "./sections/Architecture";
import Why from "./sections/Why";
import Resources from "./sections/Resources";
import Contact from "./sections/Contact";
import ChatBot from "./components/ChatBot/ChatBot";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Platform />
        <Solutions />
        <Architecture />
        <Why />
        <Resources />
        <Contact />
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
