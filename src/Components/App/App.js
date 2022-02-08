import NavigationBar from "../NavigationBar/NavigationBar";
import Avatar from "../Avatar/Avatar";
import Experience from "../Experience/Experience";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Avatar />
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Experience />
      </div>
      <Contact />
    </div>
  );
}

export default App;
