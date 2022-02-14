import NavigationBar from "../NavigationBar/NavigationBar";
import Avatar from "../Avatar/Avatar";
import Experience from "../Experience/Experience";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./Home.css";
function Home() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="root">
        <Avatar />
        <div className="section">
          <About />
        </div>
        <div className="section">
          <Experience />
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
