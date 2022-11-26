import Carts from "./sections/Carts";
import Courses from "./sections/Courses";
import Features from "./sections/Features";
import Feedback from "./sections/Feedback";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import Learn from "./sections/Learn";
import Platform from "./sections/Platform";
import Posts from "./sections/Posts";
import Start from "./sections/Start";
import Students from './sections/Students';


function App() {
  return <>
    <Header />
    <Intro />
    <Platform />
    <Learn />
    <Courses />
    <Students />
    <Carts />
    <Features />
    {/* <Feedback /> */}
    <Posts/>
    <Start />
    <Footer />
  </>
}

export default App;
