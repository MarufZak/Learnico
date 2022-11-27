import {Carts,Courses,Features,Footer,Header,Intro,Learn,Platform,Posts,Start,Students,Feedback} from "./sections";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Intro />
        <Platform />
        <Learn />
        <Courses />
        <Students />
        <Carts />
        <Features />
        <Feedback />
        <Posts />
        <Start />
      </main>
      <Footer />
    </>
  );
}

export default App;
