import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Certificate from "./components/certificate/Certificate";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="app">
     <Topbar/>
     <section className="sections">
        <Intro/>
        <Portfolio/>
        <Certificate/>
        <Contact/>
     </section>
    </div>
  );
}

export default App;
