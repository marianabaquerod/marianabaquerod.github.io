import NavigationBar from "../NavigationBar/NavigationBar";
import Avatar from "../Avatar/Avatar";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Avatar />
      <div className="section">
        <Experience />
      </div>
      <div className="section">
        <Education />
      </div>
    </div>
  );
}

export default App;
